const reportModal = document.getElementById('reportModal');
const reportForm = document.getElementById('reportForm');
const reportType = document.getElementById('reportType');
const reportDescription = document.getElementById('reportDescription');
const reportWebsite = document.getElementById('reportWebsite');
const reportTypeDescription = document.getElementById('reportTypeDescription');
const reportStatus = document.getElementById('reportStatus');
const sendReportButton = document.getElementById('sendReport');
const closeReportButton = document.getElementById('closeReport');

const reportDescriptions = {
    inappropriate: 'Conteúdo que viola as regras.',
    spam: 'Propaganda e mensagens repetitivas.',
    malicious_nickname: 'Nome enganoso ou que imita outro usuário.',
    harassment: 'Ataques a outros usuários.',
    fake_information: 'Dados incorretos.',
    broken_link: 'Download ou página indisponível.',
    wrong_game: 'Informações erradas sobre um jogo.',
    scam: 'Links ou ofertas suspeitas.',
    other: 'Qualquer outro problema.'
};

let reportTarget = {
    targetType: 'game',
    targetId: '',
    reportedUser: '',
    targetUrl: ''
};
let reportReturnFocus = null;
let reportCloseTimeout = 0;

function updateReportTypeDescription() {
    reportTypeDescription.textContent = reportDescriptions[reportType.value] || '';
}

function closeReport() {
    window.clearTimeout(reportCloseTimeout);
    reportModal.hidden = true;
    document.body.classList.remove('report-modal-open');
    if (reportReturnFocus?.isConnected) reportReturnFocus.focus();
}

function openReport(type, id, username = '', targetUrl = window.location.href) {
    window.clearTimeout(reportCloseTimeout);
    reportReturnFocus = document.activeElement;
    reportTarget = {
        targetType: String(type || ''),
        targetId: String(id || ''),
        reportedUser: String(username || ''),
        targetUrl: String(targetUrl || '')
    };
    reportForm.reset();
    reportStatus.textContent = '';
    reportStatus.className = '';
    updateReportTypeDescription();
    reportModal.hidden = false;
    document.body.classList.add('report-modal-open');
    reportType.focus();
}

window.openReport = openReport;

document.addEventListener('click', event => {
    const reportButton = event.target.closest('[data-open-report]');
    if (reportButton) {
        openReport(
            reportButton.dataset.reportType,
            reportButton.dataset.reportId,
            reportButton.dataset.reportedUser || '',
            reportButton.dataset.reportUrl || window.location.href
        );
        return;
    }

    if (event.target === reportModal) closeReport();
});

closeReportButton.addEventListener('click', closeReport);
reportType.addEventListener('change', updateReportTypeDescription);
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !reportModal.hidden) closeReport();
});

reportForm.addEventListener('submit', async event => {
    event.preventDefault();
    const description = reportDescription.value.trim();
    if (description.length < 5) {
        reportStatus.textContent = 'Descreva o problema com pelo menos 5 caracteres.';
        reportStatus.className = 'report-status-error';
        reportDescription.focus();
        return;
    }

    sendReportButton.disabled = true;
    sendReportButton.textContent = 'Enviando...';
    reportStatus.textContent = '';
    reportStatus.className = '';

    const payload = {
        ...reportTarget,
        type: reportType.value,
        description,
        website: reportWebsite.value
    };

    try {
        const response = await fetch('/api/report', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json().catch(() => null);
        if (!response.ok || !result?.success) {
            throw new Error(result?.message || 'Não foi possível enviar a denúncia.');
        }

        reportStatus.textContent = 'Denúncia enviada com sucesso!';
        reportStatus.className = 'report-status-success';
        reportForm.reset();
        updateReportTypeDescription();
        reportCloseTimeout = window.setTimeout(closeReport, 1800);
    } catch (error) {
        reportStatus.textContent = error.message || 'Não foi possível enviar a denúncia.';
        reportStatus.className = 'report-status-error';
    } finally {
        sendReportButton.disabled = false;
        sendReportButton.innerHTML = '<i class="fa-solid fa-flag" aria-hidden="true"></i> Enviar denúncia';
    }
});
