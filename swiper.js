var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 3,
    speed: 600,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        renderBullet: function (index, className) {
            if (index >= 3 && index <= 8) {
                return '<span class="' + className + '" data-slide="' + index + '"></span>';
            }
            return '';
        },
    },

    on: {
        init: function () {
            setTimeout(() => {
                const bullets = document.querySelectorAll('.swiper-pagination-bullet');
                bullets.forEach(bullet => bullet.classList.remove('swiper-pagination-bullet-active'));

                const firstBullet = document.querySelector('[data-slide="3"]');
                if (firstBullet) {
                    firstBullet.classList.add('swiper-pagination-bullet-active');
                }
            }, 50);
        },

        slideChange: function () {
            const bullets = document.querySelectorAll('.swiper-pagination-bullet');
            bullets.forEach(bullet => bullet.classList.remove('swiper-pagination-bullet-active'));

            let activeIndex = this.activeIndex;

            if (activeIndex >= 9) {
                setTimeout(() => {
                    this.slideTo(3, 0);
                }, 600);
                activeIndex = 3;
            }
            if (activeIndex < 3) {
                setTimeout(() => {
                    this.slideTo(8, 0);
                }, 600);
                activeIndex = 8;
            }

            const activeBullet = document.querySelector(`[data-slide="${activeIndex}"]`);
            if (activeBullet) {
                activeBullet.classList.add('swiper-pagination-bullet-active');
            }
        }
    }
});