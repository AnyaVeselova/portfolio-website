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

export default observer