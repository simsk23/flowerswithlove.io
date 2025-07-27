document.addEventListener('DOMContentLoaded', function () {
    // Настройка каруселей
    document.querySelectorAll('.new-carousel-container-1, .new-carousel-container-2').forEach(container => {
        const track = container.querySelector('.new-carousel-1, .new-carousel-2');
        const slides = Array.from(track.children);
        const slideCount = slides.length;
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');

        let currentIndex = 0;

        // Функция обновления позиции карусели
        function updateCarousel() {
            const slideWidth = slides[0].getBoundingClientRect().width + 15; // ширина слайда + gap
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        // Обработчики кликов
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        });

        // Адаптация под изменение размера окна
        window.addEventListener('resize', updateCarousel);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
}, 3000); // каждые 3 секунды



document.addEventListener('DOMContentLoaded', function () {
    // Синхронизация каруселей 1
    const carouselContainer1 = document.querySelector('.new-carousel-container-1');
    const carouselTrackImages1 = carouselContainer1.querySelector('.new-carousel-1');
    const carouselTrackText1 = carouselContainer1.querySelector('.text-carousel-1');

    const slidesImages1 = carouselTrackImages1.querySelectorAll('.new-carousel-slide-1');
    const slidesText1 = carouselTrackText1.querySelectorAll('.text-carousel-slide-1');

    let currentIndex1 = 0;

    function updateCarousel(carouselTrack, slides, index) {
        const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).gap || 0);
        carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    carouselContainer1.querySelector('.prev').addEventListener('click', () => {
        currentIndex1 = (currentIndex1 - 1 + slidesImages1.length) % slidesImages1.length;
        updateCarousel(carouselTrackImages1, slidesImages1, currentIndex1);
        updateCarousel(carouselTrackText1, slidesText1, currentIndex1);
    });

    carouselContainer1.querySelector('.next').addEventListener('click', () => {
        currentIndex1 = (currentIndex1 + 1) % slidesImages1.length;
        updateCarousel(carouselTrackImages1, slidesImages1, currentIndex1);
        updateCarousel(carouselTrackText1, slidesText1, currentIndex1);
    });

    // Синхронизация каруселей 2
    const carouselContainer2 = document.querySelector('.new-carousel-container-2');
    if (carouselContainer2) {
        const carouselTrackImages2 = carouselContainer2.querySelector('.new-carousel-2');
        const carouselTrackText2 = carouselContainer2.querySelector('.text-carousel-2');

        const slidesImages2 = carouselTrackImages2.querySelectorAll('.new-carousel-slide-2');
        const slidesText2 = carouselTrackText2.querySelectorAll('.text-carousel-slide-2');

        let currentIndex2 = 0;

carouselContainer2.querySelector('.new-carousel-control-2.prev').addEventListener('click', () => {
            currentIndex2 = (currentIndex2 - 1 + slidesImages2.length) % slidesImages2.length;
            updateCarousel(carouselTrackImages2, slidesImages2, currentIndex2);
            updateCarousel(carouselTrackText2, slidesText2, currentIndex2);
        });

        carouselContainer2.querySelector('.new-carousel-control-2.next').addEventListener('click', () => {
            currentIndex2 = (currentIndex2 + 1) % slidesImages2.length;
            updateCarousel(carouselTrackImages2, slidesImages2, currentIndex2);
            updateCarousel(carouselTrackText2, slidesText2, currentIndex2);
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach((link, index) => {
        link.style.setProperty('--i', index);
    });
});
