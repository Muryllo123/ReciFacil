var links = document.getElementById("links")

function showMenu(){
    links.style.right ="0";
    links.style.display = "block";
  

}

function hideMenu(){
    links.style.right = "-200px";
    links.style.display = "none";
}
const login = document.getElementById("login")
const dialog = document.getElementById("logar")
login.onclick = function (){
    logar.showModal()
}

const cadastro = document.getElementById("cadastro")
const modal = document.getElementById("cadastrar")
const btn = document.getElementById("dialog close")

cadastro.onclick = function () {
    modal.showModal ()
}

close.onclick = function ( ) {
    dialog.close()
}