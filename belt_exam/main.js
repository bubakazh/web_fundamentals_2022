function imgDelta(){
    var oneGame = document.querySelector("#buyMe")
    oneGame.src = "./images/stonepunk.png"
}
function reverseDelta(){
    var sameGame = document.querySelector("#buyMe")
    sameGame.src = "./images/pixel-ninjas-2.png"
}
function compCheck(){
    alert("This game is supported on Linux!")
}
var items = 0
function addtoCart(){
    items++;
    var cartItems = document.querySelector("#buyTems")
    cartItems.innerText = `${items}`
}