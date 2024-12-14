// [LEAKED] Utworz na stronie kilka przyciskow za pomoca znacznikow button z dowolonymi roznymi napsami i akapit o tesci zmien napis po kliknieciu tego akapitu napisy na przyciskach zmienia sie na twoje nazwisko

window.onload = function() {
    const NAZWISKO = "Nazwisko";
    
    let akapit = document.getElementById("zmien-napis");
    let przyciski = document.querySelectorAll("button");

    akapit.addEventListener("click", function () {
        for (const btn of przyciski) {
            btn.innerText = NAZWISKO;
        }
    })   
}