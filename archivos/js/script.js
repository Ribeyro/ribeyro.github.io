const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const drops = [];
for (let i = 0; i < canvas.width / 20; i++) drops[i] = 1;

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = "15px monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * 20, drops[i] * 20);
    if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 35);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("whatsapp-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const phone = this.phone.value.trim();
      const mensaje = this.mensaje.value.trim();

      const numero = "51959601103";
      const texto = `Hola, soy *${name}*.\n📧 Correo: ${email}\n📱 Teléfono: ${phone}\n📝 Mensaje: ${mensaje}\n\n*Quiero cotizar tus servicios.*`;
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

      console.log("🔗 URL generada:", url);
      window.open(url, "_blank"); // si falla, prueba con location.href = url;
    });
});
