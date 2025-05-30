// JS PRO para el CV de Brandon

document.addEventListener("DOMContentLoaded", () => {
  // Alerta inicial personalizada
  const bienvenida = document.createElement("div");
  bienvenida.textContent = "Bienvenido al CV de Brandon";
  bienvenida.style.position = "fixed";
  bienvenida.style.top = "20px";
  bienvenida.style.left = "50%";
  bienvenida.style.transform = "translateX(-50%)";
  bienvenida.style.backgroundColor = "#10b981";
  bienvenida.style.color = "white";
  bienvenida.style.padding = "1rem 2rem";
  bienvenida.style.borderRadius = "10px";
  bienvenida.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  bienvenida.style.zIndex = "999";
  bienvenida.style.opacity = 0;
  bienvenida.style.transition = "opacity 1s ease-in-out";

  document.body.appendChild(bienvenida);
  setTimeout(() => {
    bienvenida.style.opacity = 1;
  }, 100);

  setTimeout(() => {
    bienvenida.style.opacity = 0;
    setTimeout(() => bienvenida.remove(), 1000);
  }, 3500);

  // Transición suave de contenido
  const contenido = document.querySelector(".cv-contenido");
  contenido.style.opacity = 0;
  contenido.style.transition = "opacity 1s ease-in-out";
  setTimeout(() => {
    contenido.style.opacity = 1;
  }, 500);
});

