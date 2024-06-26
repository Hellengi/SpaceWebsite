const Button = document.getElementById("map-button")
const InnerContainer = document.getElementById("map-inner-container")
const Link = document.getElementById("map-image")
const FullScreen = document.getElementById("map-fullscreen")
const FullScreenImg = document.getElementById("map-fullscreen").getElementsByTagName('img')
const Container = document.getElementById("map-container")
const Basis = document.getElementById("map-basis")
let FS = false
Button.addEventListener('click', function () {
    InnerContainer.style.visibility = 'hidden'
    FullScreen.style.visibility = 'visible'
    Basis.src = "https://eyes.nasa.gov/apps/solar-system"
    NoFS()
})
FullScreen.addEventListener('click', function () {
    if (!FS) EnterFS()
    else NoFS()
})
function EnterFS() {
    FS = true
    Container.style.position = 'fixed'
    Container.style.width = '100vw'
    Container.style.height = '100vh'
    Container.style.top = '0'
    Container.style.left = '0'
    Container.style.zIndex = '999'
    Basis.style.transform = 'scale(1.01) translate(-5px, -5px)'
    FullScreen.style.transform = 'translate(100vw, 100vh) translate(-160%, -200%)'
    FullScreenImg[0].style.transform = 'translate(16px, 16px) rotate(0deg)'
    FullScreenImg[1].style.transform = 'translate(-16px, 16px) rotate(90deg)'
    FullScreenImg[2].style.transform = 'translate(16px, -16px) rotate(270deg)'
    FullScreenImg[3].style.transform = 'translate(-16px, -16px) rotate(180deg)'
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[0].style.transform = 'translate(12px, 12px) rotate(0deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[0].style.transform = 'translate(16px, 16px) rotate(0deg)' })
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[1].style.transform = 'translate(-12px, 12px) rotate(90deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[1].style.transform = 'translate(-16px, 16px) rotate(90deg)' })
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[2].style.transform = 'translate(12px, -12px) rotate(270deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[2].style.transform = 'translate(16px, -16px) rotate(270deg)' })
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[3].style.transform = 'translate(-12px, -12px) rotate(180deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[3].style.transform = 'translate(-16px, -16px) rotate(180deg)' })
    document.body.style.overflowY = 'hidden'
}
function NoFS() {
    FS = false
    Container.style.position = 'initial'
    Container.style.top = 'initial'
    Container.style.left = 'initial'
    Container.style.zIndex = 'initial'
    Basis.style.height = '100vh'
    if (window.matchMedia("(orientation: landscape)").matches) {
        Container.style.width = '75vw'
        Container.style.height = '75vh'
        Basis.style.transform = 'scale(0.75)'
        FullScreen.style.transform = 'translate(75vw, 75vh) translate(-140%, -160%)'
        InnerContainer.style.width = '75vw'
        InnerContainer.style.height = '75vh'
        Button.style.transform = 'translate(37.5vw, 37.5vh) translate(-50%,-50%)'
    }
    else {
        Container.style.width = '90vw'
        Container.style.height = '90vh'
        Basis.style.transform = 'scale(0.9)'
        FullScreen.style.transform = 'translate(90vw, 90vh) translate(-140%, -160%)'
        InnerContainer.style.width = '90vw'
        InnerContainer.style.height = '90vh'
        Button.style.transform = 'translate(45vw, 45vh) translate(-50%,-50%)'
    }
    if (Basis.getAttribute("src") === "") {
        let Width = parseFloat(Container.style.width)
        Container.style.height = Width / 1200 * 627 + "vw"
        InnerContainer.style.height = Width / 1200 * 627 + "vw"
        Basis.style.height = Width / 1200 * 627 / 0.75 + "vw"
        Button.style.transform = 'translate(' + Width / 2 + 'vw, ' + Width / 1200 * 627 / 2 + 'vw) translate(-50%,-50%)'
    }
    FullScreenImg[0].style.transform = 'rotate(0deg)'
    FullScreenImg[1].style.transform = 'rotate(90deg)'
    FullScreenImg[2].style.transform = 'rotate(270deg)'
    FullScreenImg[3].style.transform = 'rotate(180deg)'
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[0].style.transform = 'translate(-4px, -4px) rotate(0deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[0].style.transform = 'rotate(0deg)' })
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[1].style.transform = 'translate(4px, -4px) rotate(90deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[1].style.transform = 'rotate(90deg)' })
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[2].style.transform = 'translate(-4px, 4px) rotate(270deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[2].style.transform = 'rotate(270deg)' })
    FullScreen.addEventListener('mouseover', function () { FullScreenImg[3].style.transform = 'translate(4px, 4px) rotate(180deg)' })
    FullScreen.addEventListener('mouseout', function () { FullScreenImg[3].style.transform = 'rotate(180deg)' })
    document.body.style.overflowY = 'initial'
}
function SmallFix() {
    Link.style.opacity = "0.4"
}
NoFS()
let PictureContainer = document.getElementById("picture")
let MoonContainer = document.getElementById("moon-container")
let Moon = document.getElementById("moon")
let MoonMap = document.getElementById("moon-map")
let Follower
let StartTime
let Moving = false
let LastPositionX = 0
let LastPositionY = 0
MoonMap.addEventListener('mousedown', function () {
    MoonContainer.style.transform = "scale(" + (window.getComputedStyle(Moon).getPropertyValue("transform")).match(/[\d.]+/)[0] + ")"
    MoonContainer.style.position = "fixed"
    MoonContainer.style.zIndex = "3"
    MoonContainer.style.animation = "initial"
    Moon.style.animation = "initial"
    StartTime = Date.now()
    Moving = true
    Follower = setInterval(Following, 1)
})
window.addEventListener('mouseup', function () {
    if (Moving) Finishing()
})
window.addEventListener('resize', function () {
    if (Moving) Finishing()
})
let MousePosition = { x: undefined, y: undefined }
window.addEventListener('mousemove', function (e) {
    MousePosition = { x: e.clientX, y: e.clientY }
})
function Following() {
    MoonContainer.style.left = MousePosition.x - 60 + "px"
    MoonContainer.style.top = MousePosition.y - 60 + "px"
    LastPositionX = (LastPositionX + parseInt(MoonContainer.style.left)) / 2
    LastPositionY = (LastPositionY + parseInt(MoonContainer.style.top)) / 2
}
function Finishing() {
    Moving = false
    clearInterval(Follower)
    let ChangedX = parseInt(MoonContainer.style.left) - Math.round(LastPositionX)
    let ChangedY = parseInt(MoonContainer.style.top) - Math.round(LastPositionY)
    if (Date.now() - StartTime < 300 && ChangedX === 0 && ChangedY === 0) {
        window.location.href = "video.html"
    }
    let ResidualMovement = setInterval(function () {
        /*
        if (parseInt(MoonContainer.style.left) <= 0) ChangedX = -ChangedX
        if (parseInt(MoonContainer.style.top) <= 0) ChangedY = -ChangedY
        if (parseInt(MoonContainer.style.left) >= window.innerWidth - 120) ChangedX = -ChangedX
        if (parseInt(MoonContainer.style.top) >= window.innerHeight - 120) ChangedY = -ChangedY
         */
        MoonContainer.style.left = parseInt(MoonContainer.style.left) + ChangedX + "px"
        MoonContainer.style.top = parseInt(MoonContainer.style.top) + ChangedY + "px"
    }, 1)
    Moon.useMap = ""
    Moon.style.filter = "brightness(400%) opacity(0) blur(40px)"
    Moon.style.transform = "scale(1.4)"
    setTimeout(function () {
        clearInterval(ResidualMovement)
        MoonContainer.remove()
        Moon.remove()
        let Returned = MakeNewMoon()
        MoonContainer = Returned[0]
        Moon = Returned[1]
    }, 2000)
}
function MakeNewMoon() {
    let PictureNew = document.createElement("picture")
    let ImgNew = document.createElement("img")
    PictureNew.appendChild(ImgNew)
    PictureNew.setAttribute("width", 120)
    PictureNew.setAttribute("height", 120)
    PictureNew.setAttribute("id", "moon-container")
    ImgNew.src = "Moon.png"
    ImgNew.alt = ""
    ImgNew.setAttribute("width", 120)
    ImgNew.setAttribute("height", 120)
    ImgNew.setAttribute("id", "moon")
    ImgNew.useMap = "#moon-map"
    PictureContainer.appendChild(PictureNew)
    return [PictureNew, ImgNew]
}
window.addEventListener('load', function () {
})
const LangOption = document.getElementsByClassName("language-option")
LangOption[0].addEventListener('click', LangEnglish)
LangOption[1].addEventListener('click', LangRussian)
const MapButton = document.getElementById("map-button")
const Navigation1 = document.getElementById("navigation-1")
const Navigation2 = document.getElementById("navigation-2")
const Navigation3 = document.getElementById("navigation-3")
const Navigation4 = document.getElementById("navigation-4")
const Navigation5 = document.getElementById("navigation-5")
const Suggestion1 = document.getElementById("suggestion-1")
const Suggestion2 = document.getElementById("suggestion-2")
const Suggestion3 = document.getElementById("suggestion-3")
const Review = document.getElementById("review")
const DictionaryRus = document.getElementById("dictionary-rus")
const DictionaryEng = document.getElementById("dictionary-eng")
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LangRussian()
if (window.sessionStorage.getItem("language") === "ENG") LangEnglish()
function LangEnglish() {
    MapButton.innerText = "Run Simulation"
    Navigation1.innerText = "Navigation"
    Navigation2.innerText = "To the stars"
    Navigation3.innerText = "Solar System map"
    Navigation4.innerText = "Terms dictionary"
    Navigation5.innerText = "Schematic image"
    Suggestion1.innerText = "Feedback"
    Suggestion2.innerText = "Enter suggestions for\nwebsite improvement"
    Suggestion3.innerText = "Send"
    Review.placeholder = "Enter text"
    DictionaryRus.style.display = "none"
    DictionaryEng.style.display = "initial"
}
function LangRussian() {
    MapButton.innerText = "Запустить симуляцию"
    Navigation1.innerText = "Навигация"
    Navigation2.innerText = "К звездам"
    Navigation3.innerText = "Карта звездной системы"
    Navigation4.innerText = "Словарь терминов"
    Navigation5.innerText = "Рисунок-схема"
    Suggestion1.innerText = "Обратная связь"
    Suggestion2.innerText = "Введите предложения по\nулучшению сайта"
    Suggestion3.innerText = "Отправить"
    Review.placeholder = "Введите текст"
    DictionaryRus.style.display = "initial"
    DictionaryEng.style.display = "none"
}