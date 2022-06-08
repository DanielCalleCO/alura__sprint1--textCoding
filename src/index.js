import { encriptar } from "./encriptar.js";

let initialText = document.getElementById("initialText");
const resultZone = document.getElementById("resultZone");
const encriptarbtn = document.getElementById("encriptarBtn");
const desencriptarbtn = document.getElementById("desencriptarBtn");

encriptarbtn.addEventListener("click", () => {
    resultZone.innerHTML = `
    <div class="main__resultZone--withText">
    <div id="finalText" class="body__main--finalText">${encriptar()}</div>
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

desencriptarbtn.addEventListener("click", () => {
    const decoded = initialText.value
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");

    console.log(initialText.value);
    resultZone.innerHTML = `
    <div class="main__resultZone--withText">
    <div id="finalText" class="body__main--finalText">${decoded}</div>
    <button onclick=click() id="copybtn" class="main__resultZone--copybtn">Copiar & Pegar</button>
    </div>`;
    document.getElementById("copybtn").addEventListener("mousedown", () => {
        initialText.value = finalText.textContent;
        resultZone.innerHTML = `<div class="main__resultZone--withoutText">
        <img src="./resources/images/boy.png" alt="Error" />
        <h2 class="main__resultZone--textNotFound">
            Ningún mensaje fue encontrado
        </h2>
        <p class="main__resultZone--additionalText">
            Ingresa el texto de que desees encriptar o desencriptar.
        </p>`;
    });
});
// const desencriptar = () => {
// console.log(initialArray);
// const initialArrayDecoded = initialArray.map((element) => {
//     if (element == "i") {
//         return "a";
//     }
// if (element == "e") {
//     return "enter";
// }
// if (element == "i") {
//     return "imes";
// }
// if (element == "o") {
//     return "ober";
// }
// if (element == "u") {
//     return "ufat";
// }
// else {
//     return element;
// }
// });
// console.log(initialArrayCoded);
// const initialArrayJoined = initialArrayCoded.join("");
// console.log(initialArrayJoined);
// return initialArrayJoined;
//     };
//     desencriptar();
// })
