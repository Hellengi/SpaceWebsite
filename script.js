const Menu = document.getElementById("menu-container")
const Closer = document.getElementById("menu-closer")
const Banner = document.getElementById("banner")
const Opener = document.getElementById("menu-button-open")
const Background = document.getElementById("background")
const Language = document.getElementById("language")
const LanguageCurrent = document.getElementById("language-current")
const LanguageList = document.getElementById("language-list")
const LanguageOption = document.getElementsByClassName("language-option")
const BannerText = document.getElementById("banner-text")
const ToHome = document.getElementById("to-home")
const Rocket = document.getElementById("rocket")
const RocketBasis = document.getElementById("rocket-basis")
let BackgroundHeight = parseFloat(window.getComputedStyle(Background).getPropertyValue("height"))
const BannerTextLang = document.getElementById("banner-text-inner")
const MenuLang1 = document.getElementById("menu-inner-1")
const MenuLang2 = document.getElementById("menu-inner-2")
const MenuLang3 = document.getElementById("menu-inner-3")
const MenuLang4 = document.getElementById("menu-inner-4")
const ContactsLang = document.getElementById("contacts-container-inner")
const ButtonMobile = document.getElementById("button-mobile")
let LanguageOpened = false
let WindowHeight = window.innerHeight
let WindowWidth = window.innerWidth
let DocumentHeight = document.body.scrollHeight
let RocketSize = 200
let RocketBottom = 20
let RocketScale = 1
function OpenMenu() {
    if (Menu.style.transform !== 'translateX(0vw)') {
        Menu.style.transform = 'translateX(0vw)'
        Closer.style.display = 'inline'
        setTimeout(function () {
            Closer.style.backdropFilter = 'blur(2px)'
        }, 100)
        Opener.style.transform = 'translateX(-25vw)'
    }
    else {
        CloseMenu()
    }
}
function CloseMenu() {
    Menu.style.transform = 'translateX(-100vw)'
    Closer.style.backdropFilter = 'none'
    Opener.style.transform = 'translateX(0)'
    setTimeout(function () {
        Closer.style.display = 'none'
    }, 500)
}
function WindowResizing() {
    WindowHeight = window.innerHeight
    WindowWidth = window.innerWidth
    DocumentHeight = document.body.scrollHeight
    if (WindowWidth <= 400) {
        RocketBottom = WindowWidth / 20
        RocketBasis.style.scale = WindowWidth / 400
        RocketScale = WindowWidth / 400
    }
    else {
        RocketBottom = 20
        RocketBasis.style.scale = 1
        RocketScale = 1
    }
    BackgroundHeight = parseFloat(window.getComputedStyle(Background).getPropertyValue("height"))
    Menu.style.transition = 'transform 0s'
    CloseMenu()
    if (WindowWidth > WindowHeight) {
        Menu.style.transform = 'translate(0, 0)'
        Language.parentElement = Banner
        if (Language.parentElement.id === "banner") Banner.removeChild(Language)
        else if (Language.parentElement.id === "menu-container") Menu.removeChild(Language)
        Banner.appendChild(Language)
    }
    else {
        if (Language.parentElement.id === "banner") Banner.removeChild(Language)
        else if (Language.parentElement.id === "menu-container") Menu.removeChild(Language)
        Menu.appendChild(Language)
    }
    WindowScrolling()
    setTimeout(function () {
        Menu.style.transition = 'transform 0.5s'
    }, 0)
}
function WindowScrolling() {
    SetBackground()
    if (WindowWidth < WindowHeight) {
        if (window.scrollY > 0) {
            BannerText.style.opacity = '0'
            BannerText.style.translate = '-100vw'
            ToHome.style.translate = 'initial'
        }
        else {
            BannerText.style.opacity = 'initial'
            BannerText.style.translate = 'initial'
            ToHome.style.translate = '40vw'
        }
    }
    else {
        BannerText.style.opacity = 'initial'
        BannerText.style.translate = 'initial'
        ToHome.style.translate = 'initial'
    }
}
function WindowClicked() {
    if (LanguageOpened === true) LanguageClose()
}
function SetBackground () {
    Background.style.transform = "translateY(-" + Math.min(window.scrollY / 2, (window.scrollY / (DocumentHeight - WindowHeight) * (BackgroundHeight - WindowHeight))) + "px)"
}
window.addEventListener('resize', WindowResizing)
window.addEventListener('scroll', WindowScrolling)
window.addEventListener('click', WindowClicked)
Language.addEventListener('click', function () {
    if (LanguageOpened === false) LanguageOpen()
})
function LanguageOpen() {
    LanguageList.style.fontSize = "1em"
    if (WindowWidth <= 400) LanguageList.style.height = "15vw"
    else LanguageList.style.height = "60px"
    LanguageOption[0].style.height = "initial"
    LanguageOption[1].style.height = "initial"
    LanguageOption[0].style.color = "initial"
    LanguageOption[1].style.color = "initial"
    setTimeout(function () {
        LanguageOpened = true
    }, 0)
}
function LanguageClose() {
    LanguageOpened = false
    LanguageList.style.fontSize = "0"
    LanguageList.style.height = "0"
    LanguageOption[0].style.height = "0"
    LanguageOption[1].style.height = "0"
    LanguageOption[0].style.color = "#FFF0"
    LanguageOption[1].style.color = "#FFF0"
}
LanguageClose()
LanguageOption[0].addEventListener('click', LanguageEnglish)
LanguageOption[1].addEventListener('click', LanguageRussian)
function LanguageEnglish() {
    window.sessionStorage.setItem("language", "ENG")
    LanguageCurrent.innerText = "ENG"
    BannerTextLang.innerText = "Comets and asteroids"
    MenuLang1.innerText = "Classification"
    MenuLang2.innerText = "History of research"
    MenuLang3.innerText = "Catalog"
    MenuLang4.innerText = "Gallery"
    ContactsLang.innerText = "Contacts"
    ButtonMobile.innerText = "Mobile Version"
}
function LanguageRussian() {
    window.sessionStorage.setItem("language", "RUS")
    LanguageCurrent.innerText = "RUS"
    BannerTextLang.innerText = "Кометы и астероиды"
    MenuLang1.innerText = "Классификация"
    MenuLang2.innerText = "История изучения"
    MenuLang3.innerText = "Каталог"
    MenuLang4.innerText = "Галерея"
    ContactsLang.innerText = "Контакты"
    ButtonMobile.innerText = "Мобильная версия"
}
let Flying = false
RocketBasis.addEventListener('mouseenter', function () {
    if (!Flying) RocketBasis.style.height = RocketSize / 200 * 110 + "px"
})
RocketBasis.addEventListener('mouseleave', function () {
    if (!Flying) RocketBasis.style.height = RocketSize / 200 * 90 + "px"
})
RocketBasis.addEventListener ('click', function () {
    let Flame1 = document.createElement("img")
    Flame1.src = "Flame/1.png"
    Flame1.style.position = "absolute"
    Flame1.width = 47 * RocketScale
    Flame1.height = 70 * RocketScale
    Flame1.style.left = 34 * RocketScale + "px"
    Flame1.style.top = -19 * RocketScale + "px"
    Flame1.style.zIndex = "-1"
    Flame1.style.filter = "drop-shadow(0 0 20px #F737) drop-shadow(0 0 30px #F737) brightness(150%)"
    Flame1.style.visibility = "hidden"
    Rocket.appendChild(Flame1)
    let Flame2 = document.createElement("img")
    Flame2.src = "Flame/1.png"
    Flame2.style.position = "absolute"
    Flame2.width = 16 * RocketScale
    Flame2.height = 24 * RocketScale
    Flame2.style.left = 20 * RocketScale + "px"
    Flame2.style.top = -22 * RocketScale + "px"
    Flame2.style.rotate = "24deg"
    Flame2.style.zIndex = "-1"
    Flame2.style.filter = "drop-shadow(0 0 10px #F737) drop-shadow(0 0 20px #F737) brightness(150%)"
    Flame2.style.visibility = "hidden"
    Rocket.appendChild(Flame2)
    let Flame3 = document.createElement("img")
    Flame3.src = "Flame/1.png"
    Flame3.style.position = "absolute"
    Flame3.width = 18 * RocketScale
    Flame3.height = 26 * RocketScale
    Flame3.style.left = 72 * RocketScale + "px"
    Flame3.style.top = -18 * RocketScale + "px"
    Flame3.style.rotate = "-20deg"
    Flame3.style.zIndex = "-1"
    Flame3.style.filter = "drop-shadow(0 0 10px #F737) drop-shadow(0 0 20px #F737) brightness(150%)"
    Flame3.style.visibility = "hidden"
    Rocket.appendChild(Flame3)
    let Smoke1 = document.createElement("img")
    Smoke1.src = "Smoke/1.png"
    Smoke1.style.position = "absolute"
    Smoke1.width = 40 * RocketScale
    Smoke1.height = 143 * RocketScale
    Smoke1.style.left = 44 * RocketScale + "px"
    Smoke1.style.top = -90 * RocketScale + "px"
    Smoke1.style.visibility = "hidden"
    Rocket.appendChild(Smoke1)
    let Smoke2 = document.createElement("img")
    Smoke2.src = "Smoke/1.png"
    Smoke2.style.position = "absolute"
    Smoke2.width = 40 * RocketScale
    Smoke2.height = 143 * RocketScale
    Smoke2.style.left = 56 * RocketScale + "px"
    Smoke2.style.top = -95 * RocketScale + "px"
    Smoke2.style.visibility = "hidden"
    Rocket.appendChild(Smoke2)
    let Smoke3 = document.createElement("img")
    Smoke3.src = "Smoke/1.png"
    Smoke3.style.position = "absolute"
    Smoke3.width = 40 * RocketScale
    Smoke3.height = 143 * RocketScale
    Smoke3.style.left = 68 * RocketScale + "px"
    Smoke3.style.top = -100 * RocketScale + "px"
    Smoke3.style.zIndex = "-1"
    Smoke3.style.visibility = "hidden"
    Rocket.appendChild(Smoke3)
    let Smoke4 = document.createElement("img")
    Smoke4.src = "Smoke/1.png"
    Smoke4.style.position = "absolute"
    Smoke4.width = 40 * RocketScale
    Smoke4.height = 143 * RocketScale
    Smoke4.style.left = 3 * RocketScale + "px"
    Smoke4.style.top = -114 * RocketScale + "px"
    Smoke4.style.visibility = "hidden"
    Rocket.appendChild(Smoke4)
    let Smoke5 = document.createElement("img")
    Smoke5.src = "Smoke/1.png"
    Smoke5.style.position = "absolute"
    Smoke5.width = 40 * RocketScale
    Smoke5.height = 143 * RocketScale
    Smoke5.style.left = 3 * RocketScale + "px"
    Smoke5.style.top = -104 * RocketScale + "px"
    Smoke5.style.visibility = "hidden"
    Rocket.appendChild(Smoke5)
    let Counter = 0
    let RocketAnimating = setInterval(function () {
        Counter++
        Flame1.src = "Flame/" + (Counter % 8 + 1) + ".png"
        Flame2.src = "Flame/" + (Counter % 8 + 1) + ".png"
        Flame3.src = "Flame/" + (Counter % 8 + 1) + ".png"
        Smoke1.src = "Smoke/" + (Counter % 24 + 1) + ".png"
        Smoke2.src = "Smoke/" + (Counter % 24 + 1) + ".png"
        Smoke3.src = "Smoke/" + (Counter % 24 + 1) + ".png"
        Smoke4.src = "Smoke/" + (Counter % 24 + 1) + ".png"
        Smoke5.src = "Smoke/" + (Counter % 24 + 1) + ".png"
    }, 20)
    Flying = true
    RocketBasis.style.height = RocketSize / 200 * 150 + "px"
    window.scrollTo(0, DocumentHeight)
    setTimeout(function () {
        Rocket.style.position = "fixed"
        Rocket.style.bottom = RocketBottom + "px"
        Flame1.style.visibility = "initial"
        Flame2.style.visibility = "initial"
        Flame3.style.visibility = "initial"
        Smoke1.style.visibility = "initial"
        Smoke2.style.visibility = "initial"
        Smoke3.style.visibility = "initial"
        Smoke4.style.visibility = "initial"
        Smoke5.style.visibility = "initial"
        let CurrentBottom = RocketBottom
        let multiplier = 0
        let TopOfPage = false
        let FlyingInterval = setInterval(function () {
            CurrentBottom += multiplier / 5
            multiplier++
            Rocket.style.bottom = CurrentBottom + "px"
            window.scrollTo(0, DocumentHeight - DocumentHeight / WindowHeight * (CurrentBottom - RocketBottom) - WindowHeight)
            if (window.scrollY === 0 && !TopOfPage) {
                multiplier = multiplier * 2
                TopOfPage = true
            }
            if (CurrentBottom > WindowHeight * 1.2) {
                clearInterval(FlyingInterval)
                RocketBasis.style.transition = "height 0s"
                setTimeout(function () {
                    Rocket.style.position = "initial"
                    Rocket.style.bottom = "initial"
                    RocketBasis.style.height = "0px"
                    clearInterval(RocketAnimating)
                    Flame1.remove()
                    Flame2.remove()
                    Flame3.remove()
                    Smoke1.remove()
                    Smoke2.remove()
                    Smoke3.remove()
                    Smoke4.remove()
                    Smoke5.remove()
                    setTimeout(function () {
                        RocketBasis.style.transition = "height 0.5s linear"
                        setTimeout(function () {
                            RocketBasis.style.height = RocketSize / 200 * 90 + "px"
                        }, 200)
                    }, 200)
                }, 200)
                Flying = false
            }
        }, 10)
    }, 500)
})
function Error(num) {
    let ErrorMessage = document.getElementById("error-message-" + num)
    let Message = document.createElement("div")
    Message.className = "error-message"
    if (window.sessionStorage.getItem("language") === "RUS") Message.innerText = "Ошибка"
    if (window.sessionStorage.getItem("language") === "ENG") Message.innerText = "Error"
    ErrorMessage.appendChild(Message)
    setTimeout(function () {
        Message.remove()
    }, 1000)
}
WindowResizing()
window.onload = WindowResizing
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LanguageRussian()
if (window.sessionStorage.getItem("language") === "ENG") LanguageEnglish()