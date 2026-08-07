// Dinamik Yıl Güncelleme
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll Animasyonları (Intersection Observer API)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
            // Eğer tekrar animasyon olmasını istemiyorsanız alttaki yorum satırını kaldırabilirsiniz
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animasyon sınıfına sahip tüm elementleri gözlemle
const hiddenElements = document.querySelectorAll('.hidden-animate');
hiddenElements.forEach((el) => observer.observe(el));
