export default class Carousel {
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
    this.carousel.style.maxWidth = "100vw"
    this.content.classList.add("grid")
  }

}