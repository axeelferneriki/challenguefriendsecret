// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigo(){
    const inputAmigo=document.getElementById("amigo");
    const nombreAmigo=inputAmigo.attributeStyleMap();


    if (nombre === ""){
        alert("por favor, inserte un nombre.");
        return ;
    
    }

    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo}ya esta en la lista`);
        return;
        }
    amigos.push(nombreAmigo);

    inputAmigo.ariaValu= "";

    ActualizarLista();
}

function ActualizarLista(){
    const listaAmigos= document.getElementById('listaAmigos');

    listaAmigos.innerHTML="";
    //recorrer el array con un ciclo for
    for(let i=0; i <amigos.length; i++){
        const li = document.createElement {'li'};
        li.textContent = amigos[i];
        listaAmigos.appendChild[li];

    }
}

function sortearAmigo(){
    if(amigos.length ===0){
        alert("no hay amigos disponibles para sortear. Agregar al menos uno.")
        return;
    }
    const indiceAleatorio=Math.floor(Math.random()*amigos.length);

    const amigoSorteado =amigos[indiceAleatorio];

    const resultado =document.getElementById('resultado')
    resultado.innerHTML='amigo sorteado:<strong>${amigoSortado}</strong>';
        }
