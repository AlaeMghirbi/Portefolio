// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})

const btn_plus = document.getElementById("btn-plus")
btn_plus.addEventListener("click", function(){
  var autre_competences = document.getElementById("autreCompetences");
  if (autre_competences.style.display==='none'){
    autre_competences.style.display='block';
    this.style.display="none";
   
  }
  // else if (autre_competences.style.display==='block'){
  //   autre_competences.style.display='none';
  //   this.textContent="Afficher plus ";
  // }
})
const btn_moin = document.getElementById("btn-moin")
btn_moin.addEventListener("click", function(){
  var autre_competences = document.getElementById("autreCompetences");
  if (autre_competences.style.display==='block'){
    autre_competences.style.display='none';
    document.getElementById("btn-plus").style.display="block"
    
    
  }})

  let currentIndex = 0;

function moveSlide(direction) {
  console.log("aaa");
    const projects = document.querySelectorAll('.projects__row');
    const totalProjects = projects.length;
    console.log("aaa",projects.length);
    
     console.log("testttt",projects);
     
    // Calculer l'index actuel et ajuster avec la direction
    currentIndex = (currentIndex + direction + totalProjects) % (totalProjects) ;
  console.log("aaaaaaa",currentIndex,direction);
  
    const projectList = document.querySelector('.projects__content');
    const projectWidth = projects[0].offsetWidth ;  // Largeur d'un projet + margin
    const offset = -currentIndex * projectWidth;

    // Déplacer le conteneur interne avec `transform` pour que ça ne touche pas la fenêtre
    projectList.style.transform = `translateX(${offset}px)`;
    projectList.style.transition = 'transform 0.5s ease';  // Pour un mouvement fluide
}

// Attacher les événements aux flèches
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1)); 