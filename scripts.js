

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

// Ligar o Som
botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
    video.muted = !video.muted
    // ! = Inverso
}

// Mostrar o Modal

botao.addEventListener("click", monstrarModal)
modal.addEventListener("click", esconderModal)


function monstrarModal(){
    modal.style.display = "block"
}

function esconderModal(){
    modal.style.display = "none"
}

// Tocar o TUNDUM
window.addEventListener("load", tocarAudio)

function tocarAudio(){
    audio.play()
} 