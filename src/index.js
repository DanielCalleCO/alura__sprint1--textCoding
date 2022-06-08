import { encriptar } from "./encriptar.js";

let initialText = document.getElementById("initialText");
const resultZone = document.getElementById("resultZone");
const encriptarbtn = document.getElementById("encriptarBtn");
const desencriptarbtn = document.getElementById("desencriptarBtn");

encriptarbtn.addEventListener("click", () => {
    resultZone.innerHTML = `
    <div class="main__resultZone--withText">
    <div id="finalText" class="body__main--finalText">${encriptar()}
    </div>
    <button onclick=click() id="copybtn" class="main__resultZone--copybtn">Copiar & Pegar</button>
    </div>`;
    document.getElementById("copybtn").addEventListener("mousedown", () => {
        initialText.value = finalText.textContent;
        resultZone.innerHTML = `                <div class="main__resultZone--withoutText">
        <img src="./resources/images/boy.png" alt="Error" />
        <h2 class="main__resultZone--textNotFound">
            Ningún mensaje fue encontrado
        </h2>
        <p class="main__resultZone--additionalText">
            Ingresa el texto de que desees encriptar o desencriptar.
        </p>`;
    });
});
