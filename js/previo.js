/* class Profesional{
    constructor(nombre, apellido, profesion){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profesion=profesion;
    }
    presentacion(){
        alert("La profesión de " + this.nombre + " " + this.apellido + " es " + this.profesion + ". Usted se ha registrado correctamente.");
        let parrafoServicio = document.createElement("p");
        parrafoServicio.innerHTML = `<h2> Usted se ha registrado correctamente. Su nombre es ${this.nombre} ${this.apellido} y su profesión es ${this.profesion} </h2>`;
        document.body.appendChild(parrafoServicio);
        }
    
} */


/* class Cliente{
    constructor(nombreCli, apellidoCli, ciudadCli, barrioCli){
        this.nombreCli=nombreCli;
        this.apellidoCli=apellidoCli;
        this.ciudadCli=ciudadCli;
        this.barrioCli=barrioCli;
    }
    ingresoCliente(){
        alert("Usted se ha registrado correctamente. Su nombre es: " + this.nombreCli + " " + this.apellidoCli + " y vive en " + this.barrioCli +"," + this.ciudadCli);
        let parrafoCliente = document.createElement ("p");
        parrafoCliente.innerHTML = `<h2> Usted se ha registrado correctamente. Su nombre es: ${this.nombreCli} ${this.apellidoCli} y vive en ${this.barrioCli}, ${this.ciudadCli}</h2>`;
        document.body.appendChild(parrafoCliente);
    }
} */

/* class Servicio{
    constructor(servicioTipo, servicioTiempo, servicioDescrip) {
        this.servicioTipo=servicioTipo;
        this.servicioTiempo=servicioTiempo;
        this.servicioDescrip=servicioDescrip;        
    }
} */


//VA LA SEGUNDA

/* const inputName = document.getElementById('nameCliente');
const inputLastName = document.getElementById('lastNameCliente');
const loadButton = document.getElementById('btnLoad');
const content = document.getElementById('content');

loadButton.addEventListener('click', showCard);

function showCard(event){
    event.preventDefault();
    const inputNameValue =inputName.value;
    const inputLastNameValue = inputLastName.value;

    createCard(inputNameValue, inputLastNameValue, content);
}

function createCard(nameCliente, lastNameCliente, element){
    const card=document.createElement('div');

    card.className = 'card card-text text-white bg-success p-2 mb-3 mt-3' 

    card.innerHTML =`<h2> Nombre: ${nameCliente} </h2>
    <h2> Apellido: ${lastNameCliente} </h2>
    <h3> Servicio elegido: ${lastNameCliente} </h3>`;

    element.appendChild(card)
} */
