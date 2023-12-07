// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js'
// Підключення списку активних модулів
import { flsModules } from './modules.js'
// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger.js'

// let mm = gsap.matchMedia(),
//     breakPoint = 768

// gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
// ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.wrapper__scroll',
//     smooth: 1.5,
//     effects: true,
// })
// if (ScrollTrigger.isTouch !== 1) {
//     // let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
//     // if (!isSafari) {
//     //
//     // }
// }

// Смена цветовой темы
// константы
const root = document.querySelector(':root')
const toggleColorTheme = document.querySelector('#toggleColorTheme')
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
const currentTheme = localStorage.getItem('theme')

// функция смены темы
toggleColorTheme.addEventListener('click', (e) => {
    e.preventDefault()
    Array.from(toggleColorTheme.children)
    root.classList.toggle('light')
    if (Array.from(root.classList).includes('light')) {
        localStorage.setItem('theme', 'light')
    } else {
        localStorage.setItem('theme', 'dark')
    }
})
// проверка темы в локале или в настройках темы
if (currentTheme === 'light' || !prefersDarkScheme.matches) {
    root.classList.add('light')
    createIcon(`sun`, 'night')
} else {
    root.classList.remove('light')
    createIcon(`night`, 'sun')
}

function createIcon(theme, theme2) {
    toggleColorTheme.insertAdjacentHTML(
        'beforeend',
        `<span class="_icon-${theme}" ></span>
    <span class="_icon-${theme2} is-selected"></span>`
    )
}

// // клик
// // добавляем класс для анимации
// // проверяем класс первого спана
// // создаем спан с таким же классом в конце (переносим первый спан в конец)
// //

// function mouseEnter(e) {
//     console.log(e.type)
//     if (e.type == 'mouseenter') {
//         e.target.classList.add('hover')
//     } else {
//         toggleColorTheme.classList.toggle('dada')
//     }
//     // toggleColorTheme.addEventListener('mouseleave', (e) => {
//     //     console.log(e)
//     //     console.log(e.type)
//     // })
//     e.target.classList.toggle('hover')
// }
// // mouseEnter()

// toggleColorTheme.addEventListener('mouseenter', mouseEnter)
// toggleColorTheme.addEventListener('mouseleave', mouseEnter)
// toggleColorTheme.addEventListener('click', mouseEnter)
//
//
//
//
//
//
//
//
//
// const carousel = document.querySelector('#toggleColorTheme')
const button = document.querySelector('#toggleColorTheme')
// const slider = button.querySelectorAll('span')
let slides = [...button.children]

// Initial slides position, so user can go from first to last slide (click to the left first)
button.prepend(slides[slides.length - 1])

// Handling arrow buttons
const handleArrowClick = (arrow) => {
    arrow.addEventListener('click', () => {
        slides = [...button.children]

        const currSlide = button.querySelector('.is-selected')

        currSlide.classList.remove('is-selected')
        let targetSlide

        targetSlide = currSlide.nextElementSibling
        // delete
        currSlide.addEventListener('transitionend', () => {})
        button.append(slides[0])
        targetSlide.classList.add('is-selected')
    })
}

handleArrowClick(button)
