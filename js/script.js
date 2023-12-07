// /calcunivap/js/script.js
// /calcunivap/js/script.js

function calculateAverage() {
    // Obter valores das notas
    const grade1 = parseFloat(document.getElementById("grade1").value);
    const grade2 = parseFloat(document.getElementById("grade2").value);

    // Verificar se as notas são válidas
    if (isNaN(grade1) || isNaN(grade2)) {
        alert("Por favor, insira notas válidas.");
        return;
    }

    // Calcular a média
    const average = (grade1 + grade2) / 2;

    // Exibir o resultado
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>A média é: <strong>${average.toFixed(2)}</strong></p>`;

    // Verificar se a média é menor que 5
    if (average < 5) {
        // Calcular a nota necessária para o exame
        const notaFaltante = 10 - average; // Assumindo que a média é calculada em uma escala de 0 a 10

        // Armazenar os dados da média e nota faltante em localStorage
        localStorage.setItem('media', average.toFixed(2));
        localStorage.setItem('notaFaltante', notaFaltante.toFixed(2));

        // Redirecionar para a página do exame
        window.location.href = '/html/exame.html';
    } else {
        // Se a média for 5 ou maior, exibir a mensagem de parabéns
        const parabensMessage = document.getElementById("parabensMessage");
        parabensMessage.innerHTML = 'Parabéns! Continue assim.';
        parabensMessage.style.display = 'block';
    }
}



function entrar() {
    // Redirecionar para o index.html
    window.location.href = '/html/index.html';
}
function ajudaViaPix() {
    // Exibir o QR code (imagem) abaixo do botão
    const qrcodeImage = document.getElementById('qrcode');
    qrcodeImage.src = '/img/qrcode.jpg'; // Substitua com o caminho para a sua imagem
    qrcodeImage.style.display = 'block';

    // Exibir o container de copiar
    const copiarContainer = document.getElementById('copiarContainer');
    copiarContainer.style.display = 'block';

    // Gerar um código para copiar (pode ser adaptado conforme necessário)
    const codigo = '8f8562fa-feff-4e05-8437-38698a4d6762';
    
    // Atualizar a área de texto com o código
    const codigoCopiar = document.getElementById('codigoCopiar');
    codigoCopiar.value = codigo;
}
function copiarCodigo() {
    // Obter o conteúdo da área de texto
    const codigoCopiar = document.getElementById('codigoCopiar');
    codigoCopiar.select();
    document.execCommand('copy');

    // Exibir mensagem de sucesso (pode ser adaptado conforme necessário)
    alert('Código copiado para a área de transferência!');
}
let arrecadacaoEstendida = false;
function toggleArrecadacao() {
    // Toggle entre estendido e recuado
    arrecadacaoEstendida = !arrecadacaoEstendida;

    // Exibir ou ocultar os elementos conforme necessário
    const qrcodeImage = document.getElementById('qrcode');
    const copiarContainer = document.getElementById('copiarContainer');

    if (arrecadacaoEstendida) {
        // Exibir o QR code (imagem) abaixo do botão
        qrcodeImage.src = 'caminho-para-o-seu-qrcode.png'; // Substitua com o caminho para a sua imagem
        qrcodeImage.style.display = 'block';

        // Exibir o container de copiar
        copiarContainer.style.display = 'block';

    } else {
        // Recuar: Ocultar o QR code e o container de copiar
        qrcodeImage.style.display = 'none';
        copiarContainer.style.display = 'none';
    }
}
