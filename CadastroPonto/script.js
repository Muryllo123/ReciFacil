const concordo = document.getElementById("concordo")
const dialog = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

concordo.onclick =function (){
    dialog.showModal()
}
buttonClose.onclick = function (){
    dialog.close()
}