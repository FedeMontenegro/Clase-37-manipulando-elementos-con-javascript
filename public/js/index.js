let $main = document.querySelector("main");
let $h2 = document.querySelector("h2.subtitulo");
let $a = document.querySelector("a");
let $p = document.querySelectorAll("p");

$main.style.display = "block";

let nombre = prompt("ingrese su nombre");

if(nombre.trim() === ""){
    $h2.innerText += " Invitado";
}else{
    $h2.innerText += " " + nombre;
}

$h2.style.textTransform = "uppercase";

$a.style.color = "#E51B3E";

confirm("¿Desea colocar un fondo de pantalla?")?document.querySelector("body").classList.add("fondo"):"";

for(let i = 0; i < $p.length; i++){
    if(i % 2 !== 0){
        $p[i].classList.add("destacadoImpar")
    }else{
        $p[i].classList.add("destacadoPar")
    }
}


