/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Scrollbar, Autoplay, Thumbs } from 'swiper'

/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss'
// Повний набір стилів з scss/libs/swiper.scss
import '../../scss/libs/swiper.scss'
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
    if (document.querySelector('.types__body'))
        new Swiper('.types__body', {
            modules: [Scrollbar],
            observer: true,
            observeParents: true,
            slidesPerView: 1.1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            freeMode: true,
            scrollbar: {
                el: '.types__scrollbar',
                hide: false,
                draggable: true,
            },
            breakpoints: {
                475: {
                    slidesPerView: 1.5,
                },
                768: {
                    slidesPerView: 2.1,
                },
                1360: {
                    slidesPerView: 3,
                },
            },
            on: {},
        })
    if (document.querySelector('.works__body'))
        new Swiper('.works__body', {
            modules: [Scrollbar, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            loop: false,
            speed: 5e3,
            pauseOnMouseEnter: true,
            autoplay: {
                delay: 1200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            scrollbar: {
                el: '.works__scrollbar',
                hide: false,
                draggable: true,
            },
            breakpoints: {
                700: {
                    slidesPerView: 1.5,
                },
                992: {
                    slidesPerView: 2,
                },
            },
            on: {},
        })
    if (document.querySelector('.reviews__body'))
        new Swiper('.reviews__body', {
            modules: [Scrollbar, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 1.2,
            spaceBetween: 30,
            autoHeight: true,
            speed: 800,
            initialSlide: 1,
            scrollbar: {
                el: '.reviews__scrollbar',
                hide: false,
                draggable: true,
            },
            breakpoints: {
                475: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
                1360: {
                    slidesPerView: 5,
                    spaceBetween: 100,
                },
            },
            on: {},
        })
    if (document.querySelector('.partners__body'))
        new Swiper('.partners__body', {
            modules: [Scrollbar, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 2.3,
            spaceBetween: 40,
            autoHeight: true,
            speed: 5e3,
            initialSlide: 1,
            autoplay: {
                delay: 1e3,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            scrollbar: {
                el: '.partners__scrollbar',
                hide: false,
                draggable: true,
            },
            breakpoints: {
                400: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                600: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 73,
                },
            },
            on: {},
        })
    if (document.querySelector('.sliders-cart')) {
        let subslider = new Swiper('.subslider-cart', {
            modules: [Thumbs],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 10,
            speed: 800,
            breakpoints: {
                350: {
                    slidesPerView: 4.5,
                },
                400: {
                    slidesPerView: 5,
                },
                475: {
                    slidesPerView: 4,
                },
            },
        })
        new Swiper('.sliders-cart__main', {
            modules: [Thumbs],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            speed: 800,
            thumbs: {
                swiper: subslider,
            },
        })
    }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
    let sliderScrollItems = document.querySelectorAll('.swiper_scroll')
    if (sliderScrollItems.length > 0) {
        for (let index = 0; index < sliderScrollItems.length; index++) {
            const sliderScrollItem = sliderScrollItems[index]
            const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar')
            const sliderScroll = new Swiper(sliderScrollItem, {
                observer: true,
                observeParents: true,
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: {
                    enabled: true,
                },
                scrollbar: {
                    el: sliderScrollBar,
                    draggable: true,
                    snapOnRelease: false,
                },
                mousewheel: {
                    releaseOnEdges: true,
                },
            })
            sliderScroll.scrollbar.updateSize()
        }
    }
}

window.addEventListener('load', function (e) {
    // Запуск ініціалізації слайдерів
    initSliders()
    // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
    //initSlidersScroll();
})
