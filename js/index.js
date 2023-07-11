import {setInitialStyle, showMore} from "./utils.js"
import Carousel from "./Carousel.js"
import observer from "./Observer.js"

const fadeRight = document.querySelectorAll(".fade-right__hidden")
const fadeLeft = document.querySelectorAll(".fade-left__hidden")
const fadeUp = document.querySelectorAll(".fade-up__hidden")
const carousel = document.querySelector(".carousel")
const showMoreBtn = document.getElementById("more")
const form = document.getElementById("contact-form")
const email = document.getElementById("#contact-email")


fadeRight.forEach(el => observer.observe(el))
fadeLeft.forEach(el => observer.observe(el))
fadeUp.forEach(el => observer.observe(el))



// Initialize the carousel for every HTML element with class "carousel"
function layouts() {
if(window.innerWidth <= 678 && window.innerWidth >= 446) {  
  showMoreBtn.style.display="none"
  new Carousel(carousel).addEventListeners()

}else if(window.innerWidth <= 446 ||  window.innerWidth >= 678){
  showMoreBtn.style.display="block"
  new Carousel(carousel).renderGrid()
}
}
layouts() 

setInitialStyle()
showMore()
window.addEventListener("resize", () => {
  layouts() 
  setInitialStyle()
  showMore()
})


/*1. Populate my work with actual projects (link to blog posts; delete other projects html)
2. Validate form's inputs, maybe even using the API
3. Write my bio; honest one
4. check if all project links are working, and all projects, too
5.  Add scroll arrow in the end of each section except for where there're links already */
