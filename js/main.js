
function cargar_bloques(){

    let mainn = document.querySelector(".main");
    

    for(let i = 0; i <= 14; i++){ //15 bloques
        let bloque_div = document.createElement("div");
        bloque_div.innerHTML='<div class="bloque"></div>';
        mainn.appendChild(bloque_div);
    }
    
}

cargar_bloques();

function agregar_evento(){

    let todos_los_bloques = document.querySelectorAll(".bloque"); //Se llaman a los bloques texto tipo div

    function saludar(){
        console.log("Hola")

        this.classList.add("activo");
    };

    todos_los_bloques.forEach(function(elemento){ //A todos lo bloques se les agregó una funcion

        elemento.addEventListener("click",saludar)
        //A el elemento que ejecuta la función , al darle click ejecite saludar
      
    });
}

agregar_evento();