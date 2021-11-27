class Cliente{
    constructor(nombreCli, apellidoCli, ciudadCli, barrioCli){
        this.nombreCli=nombreCli;
        this.apellidoCli=apellidoCli;
        this.ciudadCli=ciudadCli;
        this.barrioCli=barrioCli;
    }
} 

class Profesional{
    constructor(nombre, apellido, profesion){
        this.nombre=nombre;
        this.apellido=apellido;
        this.profesion=profesion;
    }
    
}

//*****************************************  CLIENTE: BOTÓN AGREGAR   *************************************************

const loadButton = document.getElementById('btnLoad');
const content = document.getElementById('content');

const inputName = document.getElementById('nameCliente');
const inputLastName = document.getElementById('lastNameCliente');
const inputServicio = document.getElementById('servicioElegido');
const inputTiempo = document.getElementById('tiempoElegido');
const inputCiudad = document.getElementById('ciudadCliente');
const inputBarrio = document.getElementById('barrioCliente');

loadButton.addEventListener('click', showCard);

function showCard(event){
    event.preventDefault();


    createCard(inputName.value, inputLastName.value, inputServicio.value, inputTiempo.value, inputCiudad.value, inputBarrio.value, content); 
}

function createCard(nameCliente, lastNameCliente,servicioElegido,tiempoElegido, ciudadCliente,barrioCliente, element){
    const card=document.createElement('div');

    card.className = 'card card-text text-white bg-success p-2 mb-3 mt-3' 

    card.innerHTML =`<h2> Su nombre es: <em>${nameCliente} ${lastNameCliente}</em></h2>
    <p class="lead"> Vive en: <u>${barrioCliente}, ${ciudadCliente}</u>. </p>
    <p class="lead"> El servicio elegido es: <u>${servicioElegido}</u> y lo precisa <u>${tiempoElegido}</u>  </p>
    <p>Presione el botón <mark>ENVIAR DATOS</mark> para confirmar esta información.</p>`;
    element.appendChild(card)
}

//*****************************************   CLIENTE: BOTÓN ENVIAR   *************************************************

const form = document.getElementById('custom-form');
const divCheck = document.getElementById('checkIt');
const divServicios = document.getElementById('divServicio');
const divTiempos = document.getElementById('divTiempo');

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("custom-form").addEventListener('submit', validarFormulario); 
    });

function validarFormulario(evento) {
    evento.preventDefault();

    var allChecksBoxes = document.querySelectorAll('input[type="checkbox"]');
    var chkVacio = [].filter.call(allChecksBoxes, function(el) {
        console.log(el.checked);
        return !el.checked
    });

    if (document.fvalida.servicioElegido.selectedIndex==0){
        const alertDos = document.createElement('div');
        alertDos.className = "alert alert-danger p-2 mb-3 mt-3";
        alertDos.innerHTML = 'Debe seleccionar un servicio';
        divServicios.appendChild(alertDos);
        document.fvalida.servicioElegido.focus();
        return 0;
    }

    if (document.fvalida.tiempoElegido.selectedIndex==0){
        const alertTres = document.createElement('div');
        alertTres.className = "alert alert-danger p-2 mb-3 mt-3";
        alertTres.innerHTML = 'Debe seleccionar para cuándo requiere el servicio';
        divTiempos.appendChild(alertTres);
        document.fvalida.tiempoElegido.focus();
        return 0;
    }

    if (allChecksBoxes.length == chkVacio.length) {
/*         alert("Casilla sin chequear"); */
        const alert = document.createElement('div');
        alert.className = "alert alert-danger";
        alert.innerHTML = 'Debe aceptar las condiciones antes de enviar';
        divCheck.appendChild(alert);
    } else {
        let cliente1= new Cliente (inputName.value, inputLastName.value, inputCiudad.value, inputBarrio.value);
        console.log(cliente1);
        localStorage.setItem('cliente1',JSON.stringify(cliente1));
        this.submit();
        }
    }


//*****************************************  PROFESIONAL: BOTÓN AGREGAR   *************************************************

/* const loadButtonPro = document.getElementById('btnLoadPro');
const contentPro = document.getElementById('contentPro');

const inputNamePro = document.getElementById('namePro');
const inputLastNamePro = document.getElementById('lastNamePro');
const inputServicioPro = document.getElementById('servicioPro');
const inputDispo = document.getElementById('tiempoDispo');

loadButtonPro.addEventListener('click', showCardPro);

function showCardPro(event){
    event.preventDefault();
    createCardPro(inputNamePro.value, inputLastNamePro.value, inputServicioPro.value, inputDispo.value, content); 
}

function createCardPro(namePro, lastNamePro,servicioPro,tiempoDispo, element){
    const card=document.createElement('div');

    card.className = 'card card-text text-white bg-success p-2 mb-3 mt-3' 

    card.innerHTML =`<h2> Su nombre es: <em>${namePro} ${lastNamePro}</em></h2>
    <p class="lead"> La profesión que ofrece es: <u>${servicioPro}</u>. </p>
    <p class="lead"> Su disponibilidad horaria es: <u>${tiempoDispo}</u> </p>
    <p>Presione el botón <mark>ENVIAR DATOS</mark> para confirmar esta información.</p>`;
    element.appendChild(card)
} */