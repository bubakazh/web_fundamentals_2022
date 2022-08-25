var likes = 0
function likeMe(){
    likes++
    console.log(likes)
    var p = document.querySelector("#dopamine")
    p.innerText = `${likes} like(s)`
}
var suki = 0
function noMe(){
    suki++
    console.log(suki)
    var p = document.querySelector("#serotonin")
    p.innerText = `${suki} like(s)`
}
var gusto = 0
function noNoMe(){
    gusto++
    console.log(gusto)
    var p = document.querySelector("#adrenaline")
    p.innerText = `${gusto} like(s)`
}