// vamos a crear las variables que vamos a utilizar
//variables
//ingresamos las variables donde se va a recoger la actividad del usuario

// de esta manera accedemos a lista
var lista = document.getElementById("lista"),
//accedemos al Input de agregar tarea, donde el usuario introduce la tarea
tareaInput = document.getElementById("tareaInput"),
//accedemos al Input de agregar tarea, donde el usuario 
//da al boton para introducir su tarea
btnNuevaTarea = document.getElementById("btn-agregar");

//Creo las funciones del programa

var agregarTarea = function(){
    var tarea = tareaInput.value,//acceder al dato escrito por el usuario agregarlo en los elementos "li" de html
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),//se añade el texto al elemento a
        contenido = document.createTextNode(tarea);
    
        if (tarea === "") {//nos aseguramos de que si no hay texto avise al usuario que escriba denuevo la tarea
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida"); 
			tareaInput.className = "error";
            return false;
        }
    // Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
        
        tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

};
	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);


// recorrer los elementos de la lista si lo queremos borrar una vez realizada
//la tarea

    tareaInput.addEventListener("click", comprobarInput);
    //Va a recorrer todos los elementos de nuestra lista la opcion de borrar
//hay que usar un for y recorra los elementos de nuestra lista

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {//añadimos el evento a todos los elemntos de la lista
        lista.children[i].addEventListener("click", eleminarTarea);
    }
     
    