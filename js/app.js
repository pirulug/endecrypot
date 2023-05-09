const entry = document.getElementById("entry");
const out = document.getElementById("out");

function encrypt() {
  console.log("Encriptar");

  let text = entry.value;

  textEnc = text.replace(/e/gi, "enter");
  textEnc = textEnc.replace(/i/gi, "imes");
  textEnc = textEnc.replace(/a/gi, "ai");
  textEnc = textEnc.replace(/o/gi, "ober");
  textEnc = textEnc.replace(/u/gi, "ufat");

  // a e i o u

  out.value = textEnc;

  console.log(textEnc);
}

function decrypt() {
  console.log("Desencriptar");

  let text = entry.value;

  textDec = text.replace(/enter/gi, "e");
  textDec = textDec.replace(/imes/gi, "i");
  textDec = textDec.replace(/ai/gi, "a");
  textDec = textDec.replace(/ober/gi, "o");
  textDec = textDec.replace(/ufat/gi, "u");

  // ai enter imes ober ufat

  out.value = textDec;

  console.log(textDec);
}

function copyText() {
  console.log("Copiar");

  out.select();
  navigator.clipboard
    .writeText(out.value)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}

let btnEnc = document.getElementById("enc");
let btnDec = document.getElementById("dec");
let btnCopy = document.getElementById("copy");

btnEnc.onclick = encrypt;
btnDec.onclick = decrypt;
btnCopy.onclick = copyText;
