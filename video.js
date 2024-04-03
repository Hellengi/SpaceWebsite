const LangOption = document.getElementsByClassName("language-option")
LangOption[0].addEventListener('click', LangEnglish)
LangOption[1].addEventListener('click', LangRussian)
const BackLang = document.getElementById("back-inner")
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LangRussian()
if (window.sessionStorage.getItem("language") === "ENG") LangEnglish()
function LangEnglish() {
    BackLang.innerText = "Return"
}
function LangRussian() {
    BackLang.innerText = "Вернуться"
}