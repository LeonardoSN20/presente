const envelope = document.getElementById("envelope");
const button = document.getElementById("openButton");

let opened = false;

button.addEventListener("click", () => {

    opened = !opened;

    if (opened) {

        envelope.classList.add("open");

        button.innerHTML = "Fechar carta 💌";

    } else {

        envelope.classList.remove("open");

        button.innerHTML = "Abrir carta 💌";

    }

});