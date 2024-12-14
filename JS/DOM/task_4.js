// Zadanie 1
// Na otwarcie strony znajduje się akapit z tekstem w określonym kolorze. Po kliknięciu w ten tekst, jego kolor zmienia się na czerwony. Po kolejnym kliknięciu kolor wraca do pierwotnego.
window.onload = function () {
    let akapit = document.getElementById("akapit")

    akapit.addEventListener("click", function () {
        if (akapit.style.color != "red") {
            akapit.style.color = "red"
        } else {
            akapit.style.color = ""
        }
    })
}