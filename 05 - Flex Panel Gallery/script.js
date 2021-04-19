let allPanel = document.querySelectorAll(".panel");
allPanel.forEach(panel => panel.addEventListener("click", onClick))



function onClick(e){
    allPanel.forEach(panel => panel.classList.remove("open"))
   e.target.classList.add("open")
   console.log(e.target.children)
}