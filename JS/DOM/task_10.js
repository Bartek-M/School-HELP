// 8. Na otwarcie strony wyświetla się tekst, który automatycznie zmienia się między pogrubioną a normalną (niepogrubioną) czcionką. 
function zmienCzcionke(element) {
    if (element.style.fontWeight == "bold") {
        element.style.fontWeight = "normal";
    } else {
        element.style.fontWeight = "bold"
    }
}

window.onload = function () {
    let tekst = document.getElementById("tekst");
    setInterval(function () { zmienCzcionke(tekst) }, 100)
}