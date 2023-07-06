const fadeRight = document.querySelectorAll(".fade-right__hidden")
const fadeLeft = document.querySelectorAll(".fade-left__hidden")
const fadeUp = document.querySelectorAll(".fade-up__hidden")


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
fadeLeft.forEach(el => {observer.observe(el)})
fadeUp.forEach(el => {observer.observe(el)})


class Carousel {
  constructor(element) {
    // Retrieve every elements needed by the carousel (arrows, dots, ...)
    this.content = element.querySelector(".carousel-content")
    this.arrowLeft = element.querySelector(".fa-hand-point-left")
    this.arrowRight = element.querySelector(".fa-hand-point-right")
    this.dots = element.querySelector(".carousel-navigation").children
    // The index of the current active element of the carousel
    this.activeElement = 0
  }

  // This function will make the element at index n visible in the carousel
  makeVisible(n) {
    // Validate index
    if (n < 0 || n >= this.dots.length)
      return;
    this.activeElement = n
    // Scroll the content to bring the element into view
    // this.content is the parent container of every elements
    // this.content.children[n] is the targeted element
    // .offsetLeft is the distance between the left of the element and the left border of the window
    // .scrollTo(x, y) scroll the element at x, y offset
    this.content.scrollTo(this.content.children[n].offsetLeft - this.content.offsetLeft, 0)
    console.log(this.content.children[n].offsetLeft,  this.content.offsetLeft)
    // Activate the corresponding dot
    for (let i = 0; i < this.dots.length; i++)
      // .classList is the list of classes on the HTML element
      // .toggle(classes, force) is used to add or remove the given classes according to the boolean
      this.dots[i].classList.toggle("carousel-dot-active", this.activeElement === i)
    // Verify the left and right arrow to disable them if necessary
    // No longer needed because we want to be able to cycle through the carousel entries
    //this.arrowLeft.classList.toggle("carousel-arrow-disabled", this.activeElement === 0);
    //this.arrowRight.classList.toggle("carousel-arrow-disabled", this.activeElement === this.dots.length - 1);
  }

  // This function will register and required event listeners
  addEventListeners() {
    // To handle the click on the dots
    for (let i = 0; i < this.dots.length; i++)
      this.dots[i].addEventListener("click", () => this.makeVisible(i))
    // And on the left / right arrows
    this.arrowLeft.addEventListener("click", () => this.makeVisible((this.activeElement === 0 ? this.dots.length : this.activeElement) - 1)) // If we are on the first element and we go left, then we activate the last one
    this.arrowRight.addEventListener("click", () => this.makeVisible(this.activeElement === this.dots.length - 1 ? 0 : this.activeElement + 1)) // If we are on the last element and we go right, then we activate the first one
  }
}

// Initialize the carousel for every HTML element with class "carousel"
const carousel = document.querySelector(".carousel")
new Carousel(carousel).addEventListeners()