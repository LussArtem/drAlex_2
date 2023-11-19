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
} else {
    root.classList.remove('light')
}
