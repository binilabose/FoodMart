var menu = document.getElementById("menu")
var icon = document.getElementById("icon")
var overlay = document.getElementById("overlay")

icon.addEventListener("click", () => {
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
})
overlay.addEventListener("click", () => {
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
})

 
