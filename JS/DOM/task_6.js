// Zadanie 4
function wyczyscKafelki(kafelki) {
    for (let kafelek of kafelki) {
        kafelek.style.backgroundColor = "grey";
    }
}

window.onload = function () {
    // a) Na stronie znajduje się 6 kwadratów. Po kliknięciu w dowolny z nich, jego kolor zmienia się na czerwony. Należy użyć odpowiednich tagów HTML do realizacji tego zadania.
    let kafelkiA = document.getElementById("kafelki-a").children;

    for (let kafelek of kafelkiA) {
        kafelek.addEventListener("click", function () {
            kafelek.style.backgroundColor = "red";
        })
    }

    // b) Na stronie znajduje się 6 kafelków. Po kliknięciu w dowolny z nich, jego kolor zmienia się na czerwony. Jeśli klikniesz w inny kafelek, jego kolor zmieni się na czerwony, a poprzedni znowu stanie się szary, jak było na początku.
    let kafelkiB = document.querySelector("#kafelki-b").children;

    for (let kafelek of kafelkiB) {
        kafelek.addEventListener("click", function () {
            wyczyscKafelki(kafelkiB);
            kafelek.style.backgroundColor = "red"
        })
    }

    // c) Na stronie znajduje się 6 kafelków. Po kliknięciu w dowolny z nich, jego kolor zmienia się na czerwony. Jeśli klikniesz w inny kafelek, jego kolor zmieni się na czerwony, a poprzedni znowu stanie się szary. Jeżeli przytrzymasz klawisz Ctrl i klikniesz na kilka kafelków, możesz zaznaczyć lub odznaczyć je jednocześnie.
    let kafelkiC = document.querySelector("#kafelki-c").children;

    for (let kafelek of kafelkiC) {
        kafelek.addEventListener("click", function (e) {
            // console.log(`Trzyma CTRL: ${e.ctrlKey}`)
            if (!e.ctrlKey) {
                wyczyscKafelki(kafelkiC);
            }

            if (kafelek.style.backgroundColor == "red") {
                kafelek.style.backgroundColor = "grey"
            } else {
                kafelek.style.backgroundColor = "red"
            }
        })
    }
}