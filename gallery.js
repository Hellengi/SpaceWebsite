let temp = document.createElement("img")
temp.src = "https://source.unsplash.com/random/100x100"
temp.addEventListener('load', function () {
    let loaded = 0
    let loaded_base = 0
    let filled = 0
    let image_num = 12
    let counter = 0
    let load_time = 1000
    let started_time = Date.now()
    let image_supplement_wide = []
    let image_supplement_square = []
    let collections = [424298,543026,1112738,2559590,3467327,4332580,9639950,10269297,49548342]
    let URL = "https://source.unsplash.com/collection/"
    let URL_randomizer = ""
    let Gallery = document.getElementById("gallery")
    let Body = document.querySelector("body")
    let Loader = document.getElementById("loader")
    let Counter = document.getElementById("counter")
    let Progress = document.getElementById("progress")
    let counting = setInterval(function () {
        if(counter < (100 / (image_num + 5) - 0.095)){
            counter += 0.095
            Counter.innerText = counter.toFixed(2) + "%"
            Progress.setAttribute("value", counter)
        }
    }, load_time / 1000 * (image_num + 5))
    for (let x = 0; x < 5; x++){
        let Image = document.createElement("img")
        if (x < 2) {
            image_supplement_wide.push(Image)
            Image.src = URL + collections[Math.floor(Math.random() * collections.length)] + "/2000x1000" + URL_randomizer
            URL_randomizer += "/"
            Image.className = "image-wide"
        }
        else {
            image_supplement_square.push(Image)
            Image.src = URL + collections[Math.floor(Math.random() * collections.length)] + "/1000x1000" + URL_randomizer
            URL_randomizer += "/"
            Image.className = "image-square"
        }
        Image.alt = ""
        Image.addEventListener('load', function () {
            loaded++
            Loading()
            if (loaded === image_num + 5) Finishing()
        })
    }
    for (let i = 0; i < image_num; i++) {
        let Image = document.createElement("img")
        Image.alt = ""
        Gallery.appendChild(Image)
        Image.src = URL + collections[Math.floor(Math.random() * collections.length)] + URL_randomizer
        URL_randomizer += "/"
        Image.addEventListener('load', function (){
            loaded++
            loaded_base++
            filled++
            if (Image.naturalWidth / Image.naturalHeight < 0.67) { Image.className = "image-high"; filled++ }
            else if (Image.naturalWidth / Image.naturalHeight < 1.5) Image.className = "image-square"
            else { Image.className = "image-wide"; filled++ }
            Loading()
            if (loaded === image_num + 5) Finishing()
            if (loaded_base === image_num) {
                let i, j, k
                k = filled % 4
                switch (k) {
                    case (0):
                        i = 2
                        j = 1
                        break
                    case (1):
                        i = 3
                        j = 0
                        break
                    case (2):
                        i = 2
                        j = 2
                        break
                    case (3):
                        i = 3
                        j = 1
                        break
                }
                for (let x = 0; x < j; x++){
                    Gallery.appendChild(image_supplement_wide[x])
                }
                for (let x = 0; x < i; x++){
                    Gallery.appendChild(image_supplement_square[x])
                }
            }
        })
    }
    function Loading() {
        load_time = (Date.now() - started_time) / loaded * 1.5
        counter = loaded / (image_num + 5) * 100
        Counter.innerText = counter.toFixed(2) + "%"
        Progress.setAttribute("value", counter)
        clearInterval(counting)
        counting = setInterval(function () {
            if(counter < ((loaded + 1) / (image_num + 5) * 100 - 0.095)){
                counter += 0.095
                Counter.innerText = counter.toFixed(2) + "%"
                Progress.setAttribute("value", counter)
            }
        }, load_time / 1000 * (image_num + 5))
    }
    function Finishing() {
        clearInterval(counting)
        Loader.style.display = "none"
        Body.style.overflow = "initial"
        window.removeEventListener('keyup', HandleEsc)
    }
})
window.addEventListener('keyup', HandleEsc)
function HandleEsc (e) {
    if (e.key === "Escape") {
        window.location.href = 'index.html'
        setTimeout(function () {
            window.location.href = 'index.html'
        }, 1000)
    }
}
const LangOption = document.getElementsByClassName("language-option")
LangOption[0].addEventListener('click', LangEnglish)
LangOption[1].addEventListener('click', LangRussian)
const Label = document.getElementById("label")
const NameText = document.getElementById("name-text")
if (window.sessionStorage.getItem("language") === null) window.sessionStorage.setItem("language", "RUS")
if (window.sessionStorage.getItem("language") === "RUS") LangRussian()
if (window.sessionStorage.getItem("language") === "ENG") LangEnglish()
function LangEnglish() {
    Label.innerText = "Loading..."
    NameText.innerText = "Gallery"
}
function LangRussian() {
    Label.innerText = "Загрузка..."
    NameText.innerText = "Галерея"
}