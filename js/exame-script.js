// /calcunivap/js/exame-script.js
window.onload = function () {
    // Obter os dados da média e nota faltante do localStorage
    const media = localStorage.getItem('media');
    const notaFaltante = localStorage.getItem('notaFaltante');

    if (media !== null && notaFaltante !== null) {
        document.getElementById('mediaValue').innerText = media;
        document.getElementById('notaFaltanteValue').innerText = notaFaltante;
    }

    // Limpar os dados do localStorage após usar
    localStorage.removeItem('media');
    localStorage.removeItem('notaFaltante');
};

function voltarParaIndex() {
    // Redirecionar de volta para index.html
    window.location.href = '/index.html';
}