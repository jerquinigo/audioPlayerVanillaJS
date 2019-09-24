document.addEventListener("DOMContentLoaded", ()=> {
    let audioPlayer = document.getElementById("audioPlayer")
    let playlist = document.getElementById("playlist")
    let item1 = document.getElementById("item1")
    let item2 = document.getElementById("item2")
    let song1 = document.getElementById("song1")
    let button = document.getElementById("nextButton")
    
    item1.addEventListener("click", e => {
        audioPlayer.src = e.target.getAttribute("href")

    })

})