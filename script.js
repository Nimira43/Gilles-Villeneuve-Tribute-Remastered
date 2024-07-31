const updateImage = () => {
    bgImageEl.style.opacity = 1 - window.scrollY / 900
    bgImageEl.style.backgroundSize = 120 - window.scrollY / 120 + "%"
}

const bgImageEl = document.getElementById("bg-image")
window.addEventListener("scroll", () => updateImage())

