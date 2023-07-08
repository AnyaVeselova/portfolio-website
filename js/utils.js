function setInitialStyle() {
  let children = document.querySelectorAll(".carousel-content .my-card:nth-child(n+3)")
  let childrenArr = [...children]
  
  childrenArr.forEach(child => {
    child.style.display = "none"
    
  })

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