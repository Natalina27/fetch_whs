const promoLink = document.getElementById('promo-link');
const url = 'https://httpbin.org/status/200';

promoLink.addEventListener('click', async () => {
    try {
        await fetch(url);
    } catch (err) {
        alert(err);
    }
});
