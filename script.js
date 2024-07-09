window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 600, 0);
    header.style.backgroundSize = `${100 + scrollY / 5}%`;
    header.style.opacity = opacity;
});
