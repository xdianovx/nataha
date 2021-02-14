let burgerBtn = document.querySelector('.header__burger')
let headerNav = document.querySelector('.header__nav')

burgerBtn.addEventListener('click', function() {
    headerNav.classList.toggle('active')
})