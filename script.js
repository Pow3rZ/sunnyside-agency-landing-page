if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn')

    mobileMenuBtn.addEventListener('click', toggleMobileNav)
}

function toggleMobileNav() {
    const nav = document.querySelector('.mobile-nav')
    nav.classList.toggle('hidden')
}