
const scrollToTopButton = document.getElementById('scrollToTop');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});


scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
navigator.geolocation.getCurrentPosition((position) => {
    console.log(`Широта: ${position.coords.latitude}, Долгота: ${position.coords.longitude}`);
});
