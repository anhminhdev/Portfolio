const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')

function PageTransitions() {
  document.querySelectorAll('.control').forEach(el => {
    el.addEventListener('click', (e) => {
      // Convert active-btn class in controls
      document.querySelector('.active-btn').classList.remove('active-btn')
      e.target.classList.add('active-btn')

      document.querySelector('.active').classList.remove('active')
      document.getElementById(e.target.dataset.id).classList.add("active");
    })
  })
}
PageTransitions()