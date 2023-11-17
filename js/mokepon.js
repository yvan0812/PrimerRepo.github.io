const sectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
const reiniciarjuego = document.getElementById("boton-reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')


const seleccionarMascota = document.getElementById("seleccionar-mascota")



const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
let opcionDeMokepones
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3 
let vidasEnemigo = 3
let inputHipodoge  
let inputCapipepo  
let inputRatigueya  


class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre=nombre
        this.vida=vida
        this.foto=foto
        this.ataques= []
    }
}
                                        
let hipodoge = new Mokepon("Hipodoge", "./recursos/mokepons_mokepon_hipodoge_attack.png", 5)
let capipepo = new Mokepon("Capipepo", "./recursos/mokepons_mokepon_capipepo_attack.png", 5)
let ratigueya = new Mokepon("Ratigueya", "./recursos/mokepons_mokepon_ratigueya_attack.png", 5)


hipodoge.ataques.push(
    {nombre: "💧", id: "boton-agua" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🌱", id: "boton-tierra" },
)

ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🌱", id: "boton-tierra" },
)

capipepo.ataques.push(
    
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🔥", id: "boton-fuego" },
)



mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    
    sectionseleccionarAtaque.style.display = "none" 

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input class="estilo-de-botones" type="radio" name="mascota" id=${mokepon.nombre} />

            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `

        contenedorTarjetas.innerHTML += opcionDeMokepones


        inputHipodoge = document.getElementById(mokepones[0].nombre)
        inputCapipepo = document.getElementById(mokepones[1].nombre)
        inputRatigueya = document.getElementById(mokepones[2].nombre)
    })



    reiniciarjuego.style.display = "none"
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    seleccionarMascota.style.display = "none"
    sectionseleccionarAtaque.style.display = "flex"
    
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)
 
        spanMascotaEnemigo.innerHTML  = mokepones[mascotaAleatoria].nombre
}

function ataqueFuego() {
    ataqueJugador = '🔥FUEGO🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = '💧AGUA💧'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = '🌱TIERRA🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = '🔥FUEGO🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = '💧AGUA💧'
    } else {
        ataqueEnemigo = '🌱TIERRA🌱'
    }

    combate()
}

function combate() {

    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == '🔥FUEGO🔥' && ataqueEnemigo == '🌱TIERRA🌱') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == '💧AGUA💧' && ataqueEnemigo == '🔥FUEGO🔥') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == '🌱TIERRA🌱' && ataqueEnemigo == "💧AGUA💧") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! ")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento')
    }
}

function crearMensaje(resultado) {


    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
    
}

function crearMensajeFinal(resultadoFinal) {
    
    reiniciarjuego.style.display = "block"
    
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    
    botonFuego.disabled = true
   
    botonAgua.disabled = true
  
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


    

    

window.addEventListener('load', iniciarJuego)