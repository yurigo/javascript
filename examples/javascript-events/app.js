const buttonA = document.querySelector("#btn");

buttonA.addEventListener("click", handleClick);
buttonA.addEventListener("mousemove", handleHover);

window.addEventListener("resize", function () {
  console.log("has cambiado el tamaño de la ventana");
});

function handleClick(event) {
  console.log("has hecho click!!", event);
}
function handleHover(event) {
  console.log("has hecpasado por encima!!", event);
}

const miFormulario = document.getElementById("miFormulario");
const content = document.getElementById("content");
const formButton = document.querySelector("form#miFormulario > button");

miFormulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(miFormulario);
  const data = Object.fromEntries(formData);
  console.log("data", data);

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  <p>Nombre: ${data.nombre}</p>
  <p>Apellido: ${data.apellido}</p>
  `;

  content.appendChild(card);

  miFormulario.reset();
});
