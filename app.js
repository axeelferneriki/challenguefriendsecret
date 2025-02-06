// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];
//funcion para agregar un amigo 
function agregarAmigo(){
    const inputAmigo=document.getElementById("amigo");
    const nombreAmigo=inputAmigo.ariaValueMax.trim();

    //validar que el campo no este vacio 
    if (nombre === ""){
        alert("por favor, inserte un nombre.");
        return ;// detiene la eejecucion de la funcion 
    
    }
    //validar que el nombre no es te duplico
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo}ya esta en la lista`);
        return;
    }
    //agregar el nombre al array de amigos
    amigos.push(nombreAmigo);
    //limpiar el campo de entrada
    inputAmigo.ariaValu= "";

    ActualizarLista();
}
//funcion para actualizar la lista de amigos en la interfaz 
function ActualizarLista(){
    const listaAmigos= document.getElementById('listaAmigos');

    listaAmigos.innerHTML="";//borra cualquier contenido previo dentro del contenedor de la lista 

    //recorrer el array con un ciclo for
    for(let i=0; i <amigos.length; i++){
        const li = document.createElement ('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild[li];

    }
}
//funcion para seleccionar un amigo aleatorio

function sortearAmigo(){
    if(amigos.length === 0){
        alert("no hay amigos disponibles para sortear. Agregar al menos uno.")
        return;
    }
    const indiceAleatorio=Math.floor(Math.random()*amigos.length);
    
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado =document.getElementById('resultado');
    resultado.innerHTML=`amigo sorteado:<strong>${amigoSorteado}</strong>`;
}
