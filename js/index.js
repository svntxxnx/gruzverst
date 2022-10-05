document.addEventListener("DOMContentLoaded", function () {
    // Menu, buger ////////////////
    let btn = document.querySelector('.burger')
    let nav = document.querySelector('.header__nav')
    let selectors = document.querySelectorAll('.nav')
    btn.addEventListener('click', () => {
        btn.classList.toggle('burger__active')
        nav.classList.toggle('active')
        document.body.classList.toggle('stop__scroll')
    });
    // Modal
    let modalBtn = document.querySelector('.order__cal')
    let modalWindow = document.querySelector('[data-modal')
    let btnModal = document.querySelector('.modal__btn')
    let modalItem = document.querySelector('.modal__window')
    let cartClose = document.querySelector('.cart__close')
    let contentItemBtn = document.querySelectorAll('.content__item__btn') 
    modalBtn.addEventListener('click', () => {
        modalWindow.classList.toggle('.hidden')
        document.body.classList.toggle('.stop__scroll')

    })
    contentItemBtn.forEach(el => {
        el.addEventListener('click', () => {
            modalWindow.classList.remove('hidden')
            document.body.classList.add('stop__scroll')
        })
    })
    btnModal.addEventListener('click', () => {
        modalWindow.classList.add('hidden')

    })
    cartClose.addEventListener('click', () => {
        modalWindow.classList.add('hidden')

    })
    // Закрытие модалки по фейду
    modalWindow.addEventListener('click', () => {
        modalWindow.classList.add('hidden')
        document.body.classList.remove('stop__scroll')
    })

    // Не закрывает модалку внутри формы
    modalItem.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})















