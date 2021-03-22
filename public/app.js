const navBar = document.querySelector('.nav-bar')

const addScrollMenu = window.addEventListener("scroll", () => {
  navBar.classList.toggle('sticky', window.scrollY > 0)
})