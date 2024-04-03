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
const LangOption = document.getElementsByClassName("language-option")
LangOption[0].addEventListener('click', LangEnglish)
LangOption[1].addEventListener('click', LangRussian)
const NameText = document.getElementById("name-text")
const Names = document.getElementsByClassName("name")
const DescriptionNames = document.getElementsByClassName("description-name")
const DescriptionDescription = document.getElementsByClassName("description-description")
const DescriptionImageNames = document.getElementsByClassName("description-image-name")
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LangRussian()
if (window.sessionStorage.getItem("language") === "ENG") LangEnglish()
function LangEnglish() {
    NameText.innerText = "Classification"
    Names[0].innerText = "Comets"
    DescriptionNames[0].innerText = "Short-period"
    DescriptionNames[1].innerText = "Long-period"
    DescriptionNames[2].innerText = "Interstellar"
    DescriptionDescription[0].innerText = "Orbital period less than 200 years"
    DescriptionDescription[1].innerText = "Orbital period over 200 years"
    DescriptionDescription[2].innerText = "Not bound by gravity to any star"
    DescriptionImageNames[0].innerText = "Comet 1P/Halley"
    DescriptionImageNames[1].innerText = "Comet C/1996 B2/Hyakutake"
    DescriptionImageNames[2].innerText = "Comet 2I/Borisov"
    Names[1].innerText = "Asteroid"
    DescriptionNames[3].innerText = "C-type"
    DescriptionNames[4].innerText = "S-type"
    DescriptionNames[5].innerText = "M-type"
    DescriptionDescription[3].innerText = "Dark carbonaceous (75% of known asteroids)"
    DescriptionDescription[4].innerText = "Stony silicaceous (17% of known asteroids)"
    DescriptionDescription[5].innerText = "Metal (7% of known asteroids)"
    DescriptionImageNames[3].innerText = "253 Mathilde"
    DescriptionImageNames[4].innerText = "433 Eros"
    DescriptionImageNames[5].innerText = "21 Lutetia"
    Names[2].innerText = "Meteoroids"
    DescriptionNames[6].innerText = "Stony"
    DescriptionNames[7].innerText = "Stony-iron"
    DescriptionNames[8].innerText = "Iron"
    DescriptionDescription[6].innerText = "Chondrites and achondrites"
    DescriptionDescription[7].innerText = "Pallasites and Mesosiderites"
    DescriptionDescription[8].innerText = "Octahedrites and Ataxites"
    DescriptionImageNames[6].innerText = "Chondrite"
    DescriptionImageNames[7].innerText = "Pallasites"
    DescriptionImageNames[8].innerText = "Octahedrite"
}
function LangRussian() {
    NameText.innerText = "Классификация"
    Names[0].innerText = "Кометы"
    DescriptionNames[0].innerText = "Короткопериодические"
    DescriptionNames[1].innerText = "Долгопериодические"
    DescriptionNames[2].innerText = "Межзвездные"
    DescriptionDescription[0].innerText = "Период обращения менее 200 лет"
    DescriptionDescription[1].innerText = "Период обращения более 200 лет"
    DescriptionDescription[2].innerText = "Не связаны силами тяготения с какой-либо звездой"
    DescriptionImageNames[0].innerText = "Комета 1P/Галлея"
    DescriptionImageNames[1].innerText = "Комета C/1996 B2/Хякутакэ"
    DescriptionImageNames[2].innerText = "Комета 2I/Борисова"
    Names[1].innerText = "Астероиды"
    DescriptionNames[3].innerText = "Класс C"
    DescriptionNames[4].innerText = "Класс S"
    DescriptionNames[5].innerText = "Класс M"
    DescriptionDescription[3].innerText = "Углеродные (75% известных астероидов)"
    DescriptionDescription[4].innerText = "Силикатные (17% известных астероидов)"
    DescriptionDescription[5].innerText = "Металлические (7% известных астероидов)"
    DescriptionImageNames[3].innerText = "253 Матильда"
    DescriptionImageNames[4].innerText = "433 Эрос"
    DescriptionImageNames[5].innerText = "21 Лютеция"
    Names[2].innerText = "Метеороиды"
    DescriptionNames[6].innerText = "Каменные"
    DescriptionNames[7].innerText = "Железо-каменные"
    DescriptionNames[8].innerText = "Железные"
    DescriptionDescription[6].innerText = "Хондриты и ахондриты"
    DescriptionDescription[7].innerText = "Палласиты и мезосидериты"
    DescriptionDescription[8].innerText = "Октаэдриты, гексаэдриты и атакситы"
    DescriptionImageNames[6].innerText = "Хондрит"
    DescriptionImageNames[7].innerText = "Палласит"
    DescriptionImageNames[8].innerText = "Октаэдрит"
}