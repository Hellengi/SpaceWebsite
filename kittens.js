const Kittens = document.getElementsByClassName("kittens")
let CurPositionsX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let CurPositionsY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let x = 0; x <= 11; x++) {
    Kittens[x].style.translate = Math.floor(Math.random() * 90) + "vw " + Math.floor(Math.random() * 90) + "vh"
    CurPositionsX[x] = parseFloat(Kittens[x].style.translate.replace(/v.*/,""))
    CurPositionsY[x] = parseFloat(Kittens[x].style.translate.replace(/.* /,""))
}
let PositionsX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let PositionsY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let Timer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let x = 0; x <= 11; x++) {
    Update(x)
}
setInterval(function () {
    for (let x = 0; x <= 11; x++) {
        CurPositionsX[x] += PositionsX[x]
        CurPositionsY[x] += PositionsY[x]
        Kittens[x].style.translate = CurPositionsX[x] + "vw " + CurPositionsY[x] + "vh"
        Timer[x] -= 1
        if (Timer[x] === 0) {
            Update(x)
        }
    }
}, 1)
function Update(N) {
    PositionsX[N] = Math.floor(Math.random() * 100 - 10)
    PositionsY[N] = Math.floor(Math.random() * 100 - 10)
    Timer[N] = Math.floor(Math.random() * 90 + 50)
    PositionsX[N] = (PositionsX[N] - parseFloat(Kittens[N].style.translate.replace(/v.*/,""))) / Timer[N]
    PositionsY[N] = (PositionsY[N] - parseFloat(Kittens[N].style.translate.replace(/.* /,""))) / Timer[N]
    Kittens[N].style.zIndex = Math.floor(Math.random() * 10) + ""
}