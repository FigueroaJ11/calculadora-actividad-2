// Selecciona el elemento con la clase "pantalla" y todos los elementos con la clase "btn"
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
// Verifica si se hizo clic en el botón "Limpiar" con id "c"
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
// Verifica si se hizo clic en el botón "Borrar" con id "borrar"
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
// Verifica si se hizo clic en el botón "=" con id "igual"
        if (boton.id === "igual") {
            try {
                // De lo contrario, agrega el contenido del botón al contenido existente en la pantalla
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                // Si ocurre un error en la evaluación, muestra "Error"
                pantalla.textContent = "Error!";
            }
            return;
        }
// Si la pantalla muestra "0" o "Error", reemplaza el contenido con el botón presionado
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
// De lo contrario, agrega el contenido del botón al contenido existente en la pantalla
            pantalla.textContent += botonApretado;
        }
    })
})