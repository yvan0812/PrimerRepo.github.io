const sectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
const reiniciarjuego = document.getElementById("boton-reiniciar")
const botonMascotaJugador = document.getElementById('boton-mascota')

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
const contenedorAtaques = document.getElementById('contenedorAtaques')
let opcionDeMokepones
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let mascotaJugador
let botonFuego 
let botonAgua 
let botonTierra 
let victoriasJugador = 0 
let victoriasEnemigo = 0
let VidasEnemigo = 3
let VidasJugador = 3
let botones = []  
let ataquesMokepon
let ataquesMokeponEnemigo = []
let inputCapipepo  
let inputRatigueya
let inputHipodoge 
let inputpydo
let inputtucapalma
let inputlangostelvis




class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre=nombre  
        this.vida=vida
        this.foto=foto
        this.ataques= []
    }
}
                                        
let hipodoge    = new Mokepon("Hipodoge", "./recursos/mokepons_mokepon_hipodoge_attack.png", 5)
let capipepo    = new Mokepon("Capipepo", "./recursos/mokepons_mokepon_capipepo_attack.png", 5)
let ratigueya   = new Mokepon("Ratigueya", "./recursos/mokepons_mokepon_ratigueya_attack.png", 5)
let pydos       = new Mokepon("Pydos", "./recursos/mokepons_mokepon_pydos_attack.png", 5)
let tucapalma   = new Mokepon("Tucapalma", "./recursos/mokepons_mokepon_tucapalma_attack.png", 5)
let langostelvis = new Mokepon("Langostelvis", "./recursos/mokepons_mokepon_langostelvis_attack.png",
5)

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

pydos.ataques.push(
    
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🔥", id: "boton-fuego" },
)

tucapalma.ataques.push(
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🌱", id: "boton-tierra" },
)

langostelvis.ataques.push(
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🌱", id: "boton-tierra" },
    {nombre: "💧", id: "boton-agua" },
    {nombre: "🔥", id: "boton-fuego" },
    {nombre: "🌱", id: "boton-tierra" },
)


mokepones.push(hipodoge, capipepo, ratigueya, pydos, tucapalma, langostelvis)

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
        inputpydo = document.getElementById(mokepones[3].nombre)
        inputtucapalma = document.getElementById(mokepones[4].nombre)
        inputlangostelvis = document.getElementById(mokepones[5].nombre)
    })



    reiniciarjuego.style.display = "none"
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    seleccionarMascota.style.display = "none"
    sectionseleccionarAtaque.style.display = "flex"
    
    
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputlangostelvis.checked){
        spanMascotaJugador.innerHTML = inputlangostelvis.id
        mascotaJugador = inputlangostelvis.id
    }else if(inputtucapalma.checked){
        spanMascotaJugador.innerHTML = inputtucapalma.id
        mascotaJugador = inputtucapalma.id
    }else if(inputpydo.checked){
        spanMascotaJugador.innerHTML = inputpydo.id
        mascotaJugador = inputpydo.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

        ExtraerAtaque(mascotaJugador)


    seleccionarMascotaEnemigo()
}

function ExtraerAtaque(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            
        }
    
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=>{
        ataquesMokepon = `
        <button class=" botones BAtaque" id=${ataque.id}>${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon   
    })

            botonFuego = document.getElementById('boton-fuego')
            botonAgua = document.getElementById('boton-agua')
            botonTierra = document.getElementById('boton-tierra')
            botones = document.querySelectorAll(".BAtaque")



}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener("click", (e) => {
            if (ataqueJugador.length == 5){
                return;
            }else if(e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if(e.target.textContent === "💧") {
                ataqueJugador.push("AGUA")
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if(e.target.textContent === "🌱") {
                ataqueJugador.push("TIERRA")
                boton.style.background = "#112f58"
                boton.disabled = true
            }else if(ataque){
               alert('Selecciona un ataque')
                
            }
            ataqueAleatorioEnemigo()
        })
    })
}
  

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)
 
        spanMascotaEnemigo.innerHTML  = mokepones[mascotaAleatoria].nombre
        ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
        secuenciaAtaque()
}
 
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
       
    }
  iniciarPelea()
}
 
function iniciarPelea(){
    if (ataqueJugador.length === 5) {
       combate()
    } 
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}
 
 
 function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index);
            crearMensaje("EMPATE");
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index, index);
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        } else {
            indexAmbosOponentes(index, index);
            crearMensaje("PERDISTE");
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }
    }
    revisarVidas();
 }
   


function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Empate! ")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('Ganaste')
    } else{
        crearMensaje("perdiste")
    }
}

function crearMensaje(resultado) {


    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    
  
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    crearMensajeFinal()
    
}

function crearMensajeFinal(resultadoFinal) {
    
    reiniciarjuego.style.display = "block"
     
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
 
    
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


    

    

window.addEventListener('load', iniciarJuego)