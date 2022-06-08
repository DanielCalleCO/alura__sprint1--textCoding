export const encriptar = () => {
    const initialArray = initialText.value.split("");
    // console.log(initialArray);
    const initialArrayCoded = initialArray.map((element) => {
        if (element == "a") {
            return "ai";
        }
        if (element == "e") {
            return "enter";
        }
        if (element == "i") {
            return "imes";
        }
        if (element == "o") {
            return "ober";
        }
        if (element == "u") {
            return "ufat";
        } else {
            return element;
        }
    });
    // console.log(initialArrayCoded);
    const initialArrayJoined = initialArrayCoded.join("");
    // console.log(initialArrayJoined);
    return initialArrayJoined;
};
