const Button = document.getElementById("back");
const Frame = document.getElementById("frame");
function WindowResizing() {
    if (window.innerWidth < window.innerHeight) {
        Button.style.display = 'none';
        Frame.style.height = '100vh';
        Frame.style.width = '100vw';
    }
    else {
        Button.style.display = 'inline';
        Frame.style.height = '99vh';
        Frame.style.width = 'calc(99vh / 1.77)';
    }
}
window.addEventListener("resize", WindowResizing);
WindowResizing();
const ReturnLang = document.getElementById("return-inner")
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LangRussian()
if (window.sessionStorage.getItem("language") === "ENG") LangEnglish()
function LangEnglish() {
    ReturnLang.innerText = "Return to\nstandard mode"
}
function LangRussian() {
    ReturnLang.innerText = "Вернуться в\nстандартный режим"
}