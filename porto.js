document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("music");

    function playMusic() {
        audio.play().catch(error => console.log("Autoplay diblokir:", error));
        document.removeEventListener("click", playMusic); // Hapus event listener setelah dimainkan
    }

    // Memutar musik saat user pertama kali berinteraksi
    document.addEventListener("click", playMusic);
    document.addEventListener("scroll", playMusic);
});