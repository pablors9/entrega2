const apiConsulta = document.getElementById("atrapalos");

///objetoLiteral para el entrenadorPokemon
let trainer1 = {
  name: "",
  experience: 0,
  pokemons: [],
};

///Variables para el pokemon aleatorio
let nombre,
  exp = 0,
  imagen,
  experiencia = 0,
  llamadas = 0;

///Función que SUMA 1 cada click y GENERA un num aleatorio para la API
const pokeRandom = () => {
  if (llamadas == 5) {
    sumaExp();
    llamadas += 1;
  }
  if (llamadas > 4) return;

  let poketemporal = Math.floor(Math.random() * (151 - 1 + 1) + 1);

  añadeColeccion(poketemporal);
  pokedex(poketemporal);
  dibujarCard(llamadas, poketemporal);
 

  llamadas += 1;
};

///Función que AÑADE la imagen al HTML usando appendChild y querySelector
function añadeColeccion(poketemporal) {
  document.getElementById(
    "foto"
  ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
  }

//Función que suma experiencia usando un ciclo

function sumaExp() {
  for (let i = 0; i < trainer1.pokemons.length; i += 1) {
    console.log(trainer1.pokemons[i].experience);
    trainer1.experience += trainer1.pokemons[i].experience;
  }
  console.log(trainer1.experience);

  /////Función para desplegar experiencia con animación
  const numero = document.getElementById("puntos");

  let cantidad = 0;
  let tiempo = setInterval(() => {
    cantidad += 1;
    numero.textContent = "Tu experiencia inicial es: " + cantidad;
    if (cantidad === trainer1.experience) {
      clearInterval(tiempo);
    }
  }, 3);
}

///Función que OBTIENE datos del pokemon atrapado
function pokedex(poketemporal) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${poketemporal}`)
    .then((response) => response.json())
    .then((data) => {
      let Pokemon = {
        name: "",
        experience: 0,
        type: "",
        hP: 0,
        attack: 0,
        defense: 0,
      };
      Pokemon.name = data.name;
      Pokemon.experience = data.base_experience;
      Pokemon.type = data.types[0].type.name;
      trainer1.pokemons.push(Pokemon);
    })
    
   if (trainer1.pokemons.length>=1){
    //console.log(trainer1.pokemons[0].name)
    datosTarjeta()
   }
    
}

///Función que hace visibles las cartas y coloca las imágenes
function dibujarCard(llamadas, poketemporal) {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const card3 = document.getElementById("card3");
  const card4 = document.getElementById("card4");
  const card5 = document.getElementById("card5");
  switch (llamadas + 1) {
    case 1:
      card1.style.display = "flex";
      document.getElementById(
        "img1"
      ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
      break;
    case 2:
      card2.style.display = "flex";
      document.getElementById(
        "img2"
      ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
      break;
    case 3:
      card3.style.display = "flex";
      document.getElementById(
        "img3"
      ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
      break;
    case 4:
      card4.style.display = "flex";
      document.getElementById(
        "img4"
      ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
      break;
    case 5:
      card5.style.display = "flex";
      document.getElementById(
        "img5"
      ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poketemporal}.png`;
      break;
  }
}

////Función que coloca los datos de cada pokemon en las tarjetas usando arrays y métodos de arrays
function datosTarjeta(){
  let i=0;
trainer1.pokemons.forEach(element => {
  i+=1;
  switch (i) {
    case 1:
      
      document.getElementById(
        "nombre1"
      ).innerHTML = element.name;
      break;
    case 2:
      
      document.getElementById(
        "nombre2"
      ).innerHTML = element.name;
      break;
    case 3:
     
      document.getElementById(
        "nombre3"
      ).innerHTML = element.name;
      break;
    case 4:
     
      document.getElementById(
        "nombre4"
      ).innerHTML = element.name;
      break;
    case 5:
     
      document.getElementById(
        "nombre5"
      ).innerHTML = element.name;
      break;
  }
// console.log(element.name)
});

}
///Sección de EVENTOS
apiConsulta.addEventListener("click", pokeRandom);
