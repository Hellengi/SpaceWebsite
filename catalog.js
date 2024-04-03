const Veils = document.getElementsByClassName("veil")
window.addEventListener('load', function () {
    for (let x = 0; x < Veils.length; x++) {
        Veils[x].style.transition = "transform 1s"
    }
})
const LangOption = document.getElementsByClassName("language-option")
LangOption[0].addEventListener('click', LangEnglish)
LangOption[1].addEventListener('click', LangRussian)
const NameText = document.getElementById("name-text")
const Blocks = document.getElementsByClassName("block-text")
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LangRussian()
if (window.sessionStorage.getItem("language") === "ENG") LangEnglish()
function LangEnglish() {
    NameText.innerText = "Catalog"
    Blocks[0].innerText = "Comet Leonard (C/2021 A1 Leonard)"
    Blocks[1].innerText = "Comet NEOWISE (C/2020 F3 NEOWISE)"
    Blocks[2].innerText = "Comet McNaught (C/2006 P1 Макнота)"
    Blocks[3].innerText = "Comet Halley (1P Halley)"
    Blocks[4].innerText = "Asteroid Vesta"
    Blocks[5].innerText = "Comet Churyumov–Gerasimenko (67P Churyumov–Gerasimenko)"
}
function LangRussian() {
    NameText.innerText = "Каталог"
    Blocks[0].innerText = "Комета Леонарда (C/2021 A1 Leonard)"
    Blocks[1].innerText = "Комета NEOWISE (C/2020 F3 NEOWISE)"
    Blocks[2].innerText = "Комета Макнота (C/2006 P1 Макнота)"
    Blocks[3].innerText = "Комета Галлея (1P Halley)"
    Blocks[4].innerText = "Астероид Веста"
    Blocks[5].innerText = "Комета Чурюмова — Герасименко (67P Churyumov–Gerasimenko)"
}