const LangOption = document.getElementsByClassName("language-option")
LangOption[0].addEventListener('click', LangEnglish)
LangOption[1].addEventListener('click', LangRussian)
const NameText = document.getElementById("name-text")
const BlockName1 = document.getElementById("block-name-1")
const CardName1_1 = document.getElementById("card-name-1-1")
const CardName1_2 = document.getElementById("card-name-1-2")
const CardName1_3 = document.getElementById("card-name-1-3")
const BlockName2 = document.getElementById("block-name-2")
const CardName2_1 = document.getElementById("card-name-2-1")
const CardName2_2 = document.getElementById("card-name-2-2")
const CardName2_3 = document.getElementById("card-name-2-3")
const CardName2_4 = document.getElementById("card-name-2-4")
const CardName2_5 = document.getElementById("card-name-2-5")
const BlockName3 = document.getElementById("block-name-3")
const CardName3_1 = document.getElementById("card-name-3-1")
const CardName3_2 = document.getElementById("card-name-3-2")
const CardName3_3 = document.getElementById("card-name-3-3")
const BlockName4 = document.getElementById("block-name-4")
const CardName4_1 = document.getElementById("card-name-4-1")
const CardName4_2 = document.getElementById("card-name-4-2")
const CardName4_3 = document.getElementById("card-name-4-3")
const CardName4_4 = document.getElementById("card-name-4-4")
const BlockName5 = document.getElementById("block-name-5")
const CardName5_1 = document.getElementById("card-name-5-1")
const CardName5_2 = document.getElementById("card-name-5-2")
const CardName5_3 = document.getElementById("card-name-5-3")
const CardName5_4 = document.getElementById("card-name-5-4")
const CardName5_5 = document.getElementById("card-name-5-5")
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LangRussian()
if (window.sessionStorage.getItem("language") === "ENG") LangEnglish()
function LangEnglish() {
    NameText.innerText = "History of research"
    BlockName1.innerText = "Galileo"
    CardName1_1.innerText = "Galileo launching from Space Shuttle Atlantis"
    CardName1_2.innerText = "Asteroid Ida with with its moon Dactyl"
    CardName1_3.innerText = "Images of Jupiter's moons taken by Galileo"
    BlockName2.innerText = "Rosetta"
    CardName2_1.innerText = "Comet 67P with a tail of gas and dust"
    CardName2_2.innerText = "Rosetta \"selfie\" at Mars"
    CardName2_3.innerText = "Comet 67P/Churyumov–Gerasimenko"
    CardName2_4.innerText = "Animation of Rosetta's trajectory (2004 ~ 2016)"
    CardName2_5.innerText = "Surface of comet"
    BlockName3.innerText = "NEAR\nShoemaker"
    CardName3_1.innerText = "Запуск КА «NEAR Shoemaker» (1996 год)"
    CardName3_2.innerText = "Asteroid Eros"
    CardName3_3.innerText = "Approaching Eros"
    BlockName4.innerText = "Deep Impact"
    CardName4_1.innerText = "The Deep Impact probe"
    CardName4_2.innerText = "Comet Tempel's nucleus"
    CardName4_3.innerText = "During encounter"
    CardName4_4.innerText = "The moment of impact"
    BlockName5.innerText = "New Horizons"
    CardName5_1.innerText = "Launch of the Atlas V rocket with the New Horizons satellite"
    CardName5_2.innerText = "Arrokoth"
    CardName5_3.innerText = "Pluto"
    CardName5_4.innerText = "Charon"
    CardName5_5.innerText = "Sunset on Pluto"
}
function LangRussian() {
    NameText.innerText = "История изучения"
    BlockName1.innerText = "Галилео"
    CardName1_1.innerText = "Запуск Галилео с космического корабля \"Атлантис\""
    CardName1_2.innerText = "Астероид Ида со спутником Дактиль"
    CardName1_3.innerText = "Снимки спутников Юпитера, сделанные «Галилео»"
    BlockName2.innerText = "Розетта"
    CardName2_1.innerText = "Комета 67P с хвостом из газа и пыли"
    CardName2_2.innerText = "Пролёт мимо Марса"
    CardName2_3.innerText = "Комета 67P/Чурюмова — Герасименко"
    CardName2_4.innerText = "Траектория полёта «Розетты» (2004 ~ 2016)"
    CardName2_5.innerText = "Поверхность кометы"
    BlockName3.innerText = "NEAR\nShoemaker"
    CardName3_1.innerText = "Запуск КА «NEAR Shoemaker» (1996 год)"
    CardName3_2.innerText = "Астероид Эрос"
    CardName3_3.innerText = "Приближение к Эросу"
    BlockName4.innerText = "Deep Impact"
    CardName4_1.innerText = "Зонд Deep Impact"
    CardName4_2.innerText = "Ядро кометы Темпеля"
    CardName4_3.innerText = "Вид с ударника зонда «Deep Impact» в последние минуты"
    CardName4_4.innerText = "Момент удара"
    BlockName5.innerText = "Новые горизонты"
    CardName5_1.innerText = "Запуск ракеты Атлас-5 с АМС «Новые горизонты»"
    CardName5_2.innerText = "Аррокот"
    CardName5_3.innerText = "Плутон"
    CardName5_4.innerText = "Харон"
    CardName5_5.innerText = "Закат на Плутоне"
}
const FullImageContainer = document.getElementById("full-image-container")
let FullImage
let FullImageBackground
let FullScreenMode = false
function OpenImage(bl, im) {
    let scrollY = window.scrollY
    window.onscroll = function () {
        window.scrollTo(0, scrollY)
    }
    FullImageBackground = document.createElement("div")
    FullImageBackground.className = "full-image-background"
    FullImageContainer.appendChild(FullImageBackground)
    FullImage = document.createElement("img")
    FullImage.className = "full-image"
    FullImage.src = "History/" + bl + "-" + im + ".png"
    FullImageContainer.appendChild(FullImage)
    FullScreenMode = true
    FullImageBackground.addEventListener("click", function () {
        CloseImage()
    })
}
window.addEventListener("keydown", function (e) {
    if (FullScreenMode === true && e.key === "Escape") {
        CloseImage()
    }
})
function CloseImage() {
    window.onscroll = function () {}
    FullImageBackground.remove()
    FullImage.remove()
    FullScreenMode = false
}
window.addEventListener('resize', function () {
    console.log(window.innerWidth)
})