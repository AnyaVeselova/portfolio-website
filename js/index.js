const fadeRight = document.querySelectorAll(".fade-right__hidden")
const fadeLeft = document.querySelectorAll(".fade-left__hidden")
const fadeUp = document.querySelectorAll(".fade-up__hidden")
const carousel = document.querySelector(".carousel")


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry => {
    let targetOne = entry.target.classList.contains("fade-right__hidden")
    let targetTwo = entry.target.classList.contains("fade-left__hidden")
    let targetThree = entry.target.classList.contains("fade-up__hidden")
    if(entry.isIntersecting && targetOne) {
      entry.target.classList.add("fade-right__show")
    }else if(entry.isIntersecting && targetTwo){
      entry.target.classList.add("fade-left__show")
    }else if(entry.isIntersecting && targetThree) {
      entry.target.classList.add("fade-up__show")
    }else {
      entry.target.classList.remove("fade-right__show")
      entry.target.classList.remove("fade-left__show")
      entry.target.classList.remove("fade-up__show")
    }
  }))
})

fadeRight.forEach(el => observer.observe(el))
fadeLeft.forEach(el => observer.observe(el))
fadeUp.forEach(el => observer.observe(el))


class Carousel {
  constructor(element) {
    // Retrieve every elements needed by the carousel (arrows, dots, ...)
    this.carousel = document.querySelector(".carousel")
    this.content = element.querySelector(".carousel-content")
    this.arrowLeft = element.querySelector(".fa-hand-point-left")
    this.arrowRight = element.querySelector(".fa-hand-point-right")
    this.dots = element.querySelector(".carousel-navigation").children
    // The index of the current active element of the carousel
    this.activeElement = 0
  }

  // This function will make the element at index n visible in the carousel
  makeVisible(n) {
    if (n < 0 || n >= this.dots.length)
      return;
    this.activeElement = n
    this.content.style.paddingRight = "0"
    this.content.scrollTo(this.content.children[n].offsetLeft - this.content.offsetLeft - 15, 0)
    if(this.content.children[n].classList.contains("last")) {
    this.content.style.paddingRight = "1em"
    }
   
    for (let i = 0; i < this.dots.length; i++)
    this.dots[i].classList.toggle("carousel-dot-active", this.activeElement === i)
  }


  addEventListeners() {
    [...this.dots].map(dot => dot.style.display = "block")
    this.arrowLeft.style.display = "block"
    this.arrowRight.style.display = "block"
    this.content.classList.remove("grid")
 
    for (let i = 0; i < this.dots.length; i++)
      this.dots[i].addEventListener("click", () => this.makeVisible(i))
   
    this.arrowLeft.addEventListener("click", () => this.makeVisible((this.activeElement === 0 ? this.dots.length : this.activeElement) - 1)) // If we are on the first element and we go left, then we activate the last one
    this.arrowRight.addEventListener("click", () => this.makeVisible(this.activeElement === this.dots.length - 1 ? 0 : this.activeElement + 1)) // If we are on the last element and we go right, then we activate the first one
  }

  renderGrid() {
    [...this.dots].map(dot => dot.style.display = "none")
    this.arrowLeft.style.display = "none"
    this.arrowRight.style.display = "none"
    carousel.style.maxWidth = "100vw"
    this.content.classList.add("grid")
  }

}

// Initialize the carousel for every HTML element with class "carousel"
function layouts() {
if(window.innerWidth <= 678 && window.innerWidth >= 446) {
  new Carousel(carousel).addEventListeners()

}else if(window.innerWidth <= 446 ||  window.innerWidth >= 678){
  new Carousel(carousel).renderGrid()
}
}
layouts() 

window.addEventListener("resize", () => {
  layouts() 
})
              
 

function setInitialStyle() {
  let children = document.querySelectorAll(".carousel-content .my-card:nth-child(n+3)")
  let childrenArr = [...children]
  
  childrenArr.forEach(child => {
    child.style.display = "none"
    
  })

  return childrenArr

}

setInitialStyle()

function showMore() {

  let childrenArr = setInitialStyle()
  
  const showMoreBtn = document.getElementById("more")

  showMoreBtn.addEventListener("click", function() {
    childrenArr.forEach(child => {
     if(child.style.display == "none") {
       child.style.display = "block"
       showMoreBtn.innerHTML = "<p>view less</p>"
     } else {
      child.style.display = "none"
      showMoreBtn.innerHTML = "<p>view more</p>"
     }
      
    })
      
  })
    
}

showMore()




