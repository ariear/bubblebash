window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        document.querySelector('nav').classList.add('nengbar')
        document.querySelector('nav').classList.remove('navbar-dark')
        document.querySelector('nav').classList.add('navbar-light')
        document.querySelector('nav').classList.remove('py-4')
        document.querySelector('nav').classList.add('py-2')
    } else {
        document.querySelector('nav').classList.remove('nengbar')
        document.querySelector('nav').classList.remove('navbar-light')
        document.querySelector('nav').classList.add('navbar-dark')
        document.querySelector('nav').classList.remove('py-2')
        document.querySelector('nav').classList.add('py-4')
    }
  });