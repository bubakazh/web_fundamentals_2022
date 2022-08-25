var likes = 0
function likeMe(){
    likes++
    console.log(likes)
    var p = document.querySelector("#dopamine")
    p.innerText = `${likes} like(s)`
}