document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('btn-kiwify');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log('Redirecionando leitor para o checkout Kiwify.');
        });
    }
});