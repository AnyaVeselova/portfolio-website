function setInitialStyle() {
  let children 
  if(window.innerWidth >= 678) {
    children = document.querySelectorAll(".carousel-content .my-card:nth-child(n+4)")
  }else if(window.innerWidth <= 446) {
    children = document.querySelectorAll(".carousel-content .my-card:nth-child(n+2)")
  }else {
    children = document.querySelectorAll(".carousel-content .my-card")
  }
  let childrenArr = [...children]
  
  if(window.innerWidth <= 446 ||  window.innerWidth >= 678) {
  childrenArr.forEach(child => {
    child.style.display = "none"
    
  })
  }else {
    childrenArr.forEach(child => {
      child.style.display = "block"
      
    })
  }

  return childrenArr

}

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

export {showMore, setInitialStyle}