
const objetos = document.querySelectorAll(".objeto");
const progreso = document.getElementById("progreso");
const secreto = document.getElementById("secreto");

let encontrados = 0;

objetos.forEach(objeto => {
    objeto.addEventListener("click", () => {
        if (objeto.classList.contains("encontrado")) {
            return;
        }

        objeto.classList.add("encontrado");
        encontrados++;

        progreso.textContent = `${encontrados} / 5 descubiertos`;

        if (encontrados === 5) {
            secreto.style.display = "flex";
        }
    });
});

// Clic en la imagen secreta para cerrarla
secreto.addEventListener("click", () => {
    secreto.style.display = "none";
});
