const SmallBlock = document.getElementsByClassName("small-block")
const SmallBlockBorder = document.getElementById("small-block-border")
const ImageContainer = document.getElementById("image-container")
SmallBlock[0].addEventListener("click", function () {
    SmallBlockBorder.style.transform = "translateX(0)"
    ImageContainer.style.transform = "translateX(0)"
})
SmallBlock[1].addEventListener("click", function () {
    if(window.innerWidth / window.innerHeight > 1) {
        SmallBlockBorder.style.transform = "translateX(9vw)"
        ImageContainer.style.transform = "translateX(-60vw)"
    }
    else {
        SmallBlockBorder.style.transform = "translateX(21vw)"
        ImageContainer.style.transform = "translateX(-90vw)"
    }
})
SmallBlock[2].addEventListener("click", function () {
    if(window.innerWidth / window.innerHeight > 1) {
        SmallBlockBorder.style.transform = "translateX(18vw)"
        ImageContainer.style.transform = "translateX(-120vw)"
    }
    else {
        SmallBlockBorder.style.transform = "translateX(42vw)"
        ImageContainer.style.transform = "translateX(-180vw)"
    }
})