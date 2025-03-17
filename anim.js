// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Aumentar el tamaño de la fuente
lyrics.style.fontSize = "3em";

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Balanceándome en el patio", time: 18 },
  { text: "Llegas en tu carro rápido", time: 20 },
  { text: "Silbando mi nombre", time: 21 },
  { text: "Abres una cerveza", time: 25 },
  { text: "Me dices💬 — 'Ven aquí'", time: 27 },
  { text: "Y juegas un videojuego🎮.", time: 29 },
  { text: "Llevo puesto su vestido favorito", time: 34 },
  { text: "Me mira mientras me desnudo", time: 35 },
  { text: "Lleva su cuerpo hacia mi entrepierna", time: 37 },
  { text: "Digo💬 — 'Eres el mejor.'", time: 42 },
  { text: "Me inclino para darle un gran beso", time: 43 },
  { text: "Me pongo su perfume favorito", time:45 },
  { text: "Ve a jugar tu videojuego🎮.", time: 49 },
  { text: "ES POR TI❤️‍🩹", time: 52 },
  { text: "ES POR TI🫵🏻", time: 52.5 },
  { text: "TODO ES POR TI❤️‍🩹🫂", time: 54 },
  { text: "Todo lo que hago", time: 58 },
  { text: "Te lo digo todo el tiempo", time: 60 },
  { text: "El paraíso✨ es un lugar en la Tierra contigo🫰", time: 63 },
  { text: "Dime todas las cosas que quieres hacer", time: 66 },
  { text: "Escuché que te gustan las chicas malas", time: 70 },
  { text: "Querido, ¿eso es verdad?", time: 73 },
  { text: "Es mejor de lo que me podría imaginar", time: 78 },
  { text: "Dicen que el mundo🌏 fue construido para dos💞", time: 82 },
  { text: "Que solo vale la pena vivir", time: 86 },
  { text: "Si alguien", time: 88 },
  { text: "TE AMA❤️", time: 90 },
  { text: "Y, amor, AHORA ERES ❤️AMADA👩🏼‍❤️‍👨🏼", time: 95 },
  { text: "Cantando en los viejos bares", time: 104 },
  { text: "Bailando bajo las viejas estrellas💫", time: 106 },
  { text: "Viviendo por la fama", time: 108 },
  { text: "Besándonos en el azul oscuro🌌", time: 112 },
  { text: "Jugando billar y al tiro al blanco", time: 114 },
  { text: "Videojuegos🎮", time: 116 },
  { text: "Él me sostiene en sus grandes brazos", time: 120 },
  { text: "Borracho, mientras miro las 🌠estrellas", time: 122 },
  { text: "Esto es todo en lo que puedo pensar", time: 124 },
  { text: "Mirando a nuestros amigos entrar ", time: 128 },
  { text: "Y salir de Old Paul's", time: 130 },
  { text: "Esta es mi idea de diversión", time: 132 },
  { text: "Jugando 🎮 videojuegos.", time: 136 },
  { text: "ES POR TI❤️", time: 139 },
  { text: "ES POR TI🫶🏻", time: 140 },
  { text: "TODO ES POR TI🥹", time: 142 },
  { text: "Todo lo que hago", time: 144 },
  { text: "✍🏼Te lo digo todo el tiempo", time: 147 },
  { text: "El paraíso✨ es un lugar en la Tierra contigo❤️‍🩹", time: 150 },
  { text: "Dime todas las cosas que quieres hacer", time: 152 },
  { text: "Escuché que te gustan las chicas malas", time: 156 },
  { text: "Querido, ¿eso es verdad?", time: 160 },
  { text: "Es mejor de lo que me podría imaginar", time: 164 },
  { text: "Dicen que el mundo🌏 fue construido para dos💞", time: 168 },
  { text: "Que solo vale la pena vivir", time: 172 },
  { text: "Si alguien", time: 174 },
  { text: "TE AMA❤️", time: 177 },
  { text: "Y, amor, AHORA ERES ❤️AMADA👩🏼‍❤️‍👨🏼", time: 181 },
  { text: "ES POR TI❤️", time: 197 },
  { text: "ES POR TI🫶🏻", time: 197.5 },
  { text: "TODO ES POR TI🥹", time: 200 },
  { text: "Todo lo que hago", time: 203 },
  { text: "✍🏼Te lo digo todo el tiempo", time: 205 },
  { text: "El paraíso✨ es un lugar en la Tierra contigo❤️‍🩹", time: 207 },
  { text: "Dime todas las cosas que quieres hacer", time: 211 },
  { text: "Escuché que te gustan las chicas malas", time: 215 },
  { text: "Querido, ¿eso es verdad?", time: 218 },
  { text: "Es mejor de lo que me podría imaginar", time: 223 },
  { text: "Dicen que el mundo🌏 fue construido para dos💞", time: 227 },
  { text: "Que solo vale la pena vivir", time: 230 },
  { text: "Si alguien", time: 234 },
  { text: "TE AMA❤️", time: 236 },
  { text: "Y, AMOR, AHORA ERES ❤️AMADA👩🏼‍❤️‍👨🏼", time: 240 },
  { text: "VAL TE AMO, GRACIAS POR TODO", time: 242 },
  { text: "ERES LO MEJOR DE MIS DIAS", time: 244 },
  { text: "DARE TODO DE MI PARA HACERTE FELIZ", time: 246 },
  { text: "QUIERO SEGUIR VIENDO BRILLAR", time: 248 },
  { text: "ESOS HERMOSOS OJOS DE LOS QUE ME ENAMORE.❤️", time: 250 },

  
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  ); // Reducir el tiempo de permanencia a 4 segundos

  if (currentLine) {
    var fadeInDuration = 0.2; // Aumentar el tiempo de aparición suave
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500); // Actualizar cada 500ms para mayor precisión

//funcion titulo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);

document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.querySelector(".stars-container");

  function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      star.style.animationDuration = (Math.random() * 2 + 1) + "s";
      starsContainer.appendChild(star);

      setTimeout(() => {
          star.remove();
      }, 3000);
  }

  setInterval(createStar, 200);
});
