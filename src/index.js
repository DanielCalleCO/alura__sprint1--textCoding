const text = document.getElementById("textarea");
const encriptarbtn = document.getElementById("encriptarBtn");
const desencriptarbtn = document.getElementById("desencriptarBtn");

const resultArea = document.getElementById("result");

encriptarbtn.addEventListener("click", () => {
    resultArea.innerHTML = `
    <div class="main__resultZone--withText">
    <div class="body__main--finalText">
    <!--todo Aquí irá el texto final -->
    </div>
    <button class="main__resultZone--copybtn">Copiar</button>
    </div>`;
});

function encriptar() {
    const textToEncode = text.value;
}

console.log("Holi");
