import {setInitialStyle, showMore} from "./utils.js"
import Carousel from "./Carousel.js"
import observer from "./Observer.js"

const fadeRight = document.querySelectorAll(".fade-right__hidden")
const fadeLeft = document.querySelectorAll(".fade-left__hidden")
const fadeUp = document.querySelectorAll(".fade-up__hidden")
const carousel = document.querySelector(".carousel")
const showMoreBtn = document.getElementById("more")


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

window.addEventListener("resize", () => {
  layouts() 
  setInitialStyle()
  showMore()
})

setInitialStyle()
showMore()





