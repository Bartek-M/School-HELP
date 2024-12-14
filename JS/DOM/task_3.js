// Dodaj na stronie dwa zdjęcia i przycisk, który będzie zamieniał je miejscami. Utwórz jeszcze jeden przycisk, który będzie pokazywał i chował dodatkowe zdjęcie. document
window.onload = function () {
    let img1 = document.getElementById("img-1");
    let img2 = document.getElementById("img-2");
    let img3 = document.getElementById("img-3");

    let zmienObrazki = document.getElementById("zmien-obrazki");
    let pokazObrazek = document.getElementById("pokaz-obrazek");

    zmienObrazki.addEventListener("click", function () {
        let src1 = img1.src; // zmienna pomocnicza, bo skasujemy src pierwszego zdjęcia

        img1.src = img2.src;
        img2.src = src1;
    })

    pokazObrazek.addEventListener("click", function () {
        if (img3.style.display != "unset") {
            img3.style.display = "unset";
        } else {
            img3.style.display = "none"
        }
    })
}