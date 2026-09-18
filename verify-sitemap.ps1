param(
    [string]$BaseUrl = ''
)

$sitemapPath = Join-Path $PSScriptRoot 'sitemap.xml'
$utf8 = New-Object System.Text.UTF8Encoding($false, $true)
$content = $utf8.GetString([System.IO.File]::ReadAllBytes($sitemapPath))
[void][System.Reflection.Assembly]::LoadWithPartialName('System.Xml.Linq')
$xml = [System.Xml.Linq.XDocument]::Parse($content)
$namespace = 'http://www.sitemaps.org/schemas/sitemap/0.9'
$urls = @($xml.Descendants("{$namespace}url"))
$locations = @($xml.Descendants("{$namespace}loc"))

if ($xml.Root.Name.LocalName -ne 'urlset' -or $urls.Count -eq 0) {
    throw 'sitemap.xml não tem uma estrutura urlset válida.'
}

if (@($locations | Where-Object { $_.Value -notmatch '^https://wikigames\.duckdns\.org/' }).Count -gt 0) {
    throw 'O sitemap contém uma URL que não é absoluta ou não pertence ao domínio esperado.'
}

if ($BaseUrl) {
    $response = Invoke-WebRequest -Uri ($BaseUrl.TrimEnd('/') + '/sitemap.xml') -Method Get -UseBasicParsing
    $contentType = [string]$response.Headers['Content-Type']

    if ([int]$response.StatusCode -ne 200) {
        throw "O sitemap publicado respondeu HTTP $($response.StatusCode), esperado 200."
    }

    if ($contentType -notmatch '^(application|text)/xml(?:;|$)') {
        throw "Content-Type inesperado: $contentType"
    }

    $publishedXml = [System.Xml.Linq.XDocument]::Parse($response.Content)
    if ($publishedXml.Root.Name.LocalName -ne 'urlset' -or $response.Content -match '<!DOCTYPE html|<html') {
        throw 'A resposta publicada não é XML puro do sitemap.'
    }
}

Write-Output "OK: sitemap.xml válido com $($locations.Count) URLs."
if ($BaseUrl) {
    Write-Output "OK: GET $($BaseUrl.TrimEnd('/'))/sitemap.xml respondeu HTTP 200 com XML."
}