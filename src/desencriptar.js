export function desencriptar() {
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
}
