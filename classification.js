let CurrentActive = 1
const SmallBlock = document.getElementsByClassName("small-block")
const SmallBlockBorder = document.getElementById("small-block-border")
const ImageContainer = document.getElementById("image-container")
SmallBlock[0].addEventListener("click", function () {
    CurrentActive = 1
    SmallBlockBorder.style.transform = "translateX(0)"
    ImageContainer.style.transform = "translateX(0)"
})
SmallBlock[1].addEventListener("click", function () {
    CurrentActive = 2
    SmallBlockBorder.style.transform = "translateX(9vw)"
    ImageContainer.style.transform = "translateX(-60vw)"
})
SmallBlock[2].addEventListener("click", function () {
    CurrentActive = 3
    SmallBlockBorder.style.transform = "translateX(18vw)"
    ImageContainer.style.transform = "translateX(-120vw)"
})