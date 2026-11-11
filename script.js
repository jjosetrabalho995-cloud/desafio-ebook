document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('btn-kiwify');

    // Monitora o clique no botão de compra para métricas
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log('Redirecionando leitor para o checkout Kiwify: https://pay.kiwify.com.br/ElKavMv');
        });
    }
});