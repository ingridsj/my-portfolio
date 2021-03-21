const navBar = document.querySelector('.nav-bar')

window.addEventListener("scroll", function() {
  navBar.classList.toggle('sticky', window.scrollY > 0)
})