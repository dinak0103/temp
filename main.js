const navMenu = document.getElementById('nav-menu__changeclass'),
      navToggle = document.getElementById('nav-burger__changeclass'),
      navClose = document.getElementById('nav-close__changeclass')

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu__changeclass')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu__changeclass')
    })
}



const navLink = document.querySelectorAll('.menu__link__changeclass')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu__changeclass')
    navMenu.classList.remove('show-menu__changeclass')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


