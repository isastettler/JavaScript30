let allPanel = document.querySelectorAll(".panel");

function onClick(e) {
	//added line for improved CSS readability
	allPanel.forEach((panel) => panel.classList.remove("open"));
	this.classList.toggle("open");
}

function transition(e) {
	if (e.propertyName.includes("flex")) {
		this.classList.toggle("open-active");
	}
}

<<<<<<< HEAD
allPanel.forEach((panel) => panel.addEventListener("click", onClick));
allPanel.forEach((panel) =>
	panel.addEventListener("transitionend", transition)
);
=======
function onClick(e){
    allPanel.forEach(panel => panel.classList.remove("open"))
   e.target.classList.add("open")
}
>>>>>>> c6a749f50e354a1442002664616d11c63c8f4dc9
