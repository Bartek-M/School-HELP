// 5. Na stronie znajdują się dwa przyciski: "Kotek" i "Piesek", oraz miejsce przygotowane na wyświetlenie grafiki. Po naciśnięciu przycisku "Kotek", w wyznaczonym miejscu pojawi się obrazek kota, a tekst na przycisku "Kotek" zmieni się na kolor czerwony. Analogicznie, po naciśnięciu przycisku "Piesek", w tym samym miejscu pojawi się obrazek psa, a tekst na przycisku "Piesek" również zmieni się na czerwony.
window.onload = function () {
    let kotekBtn = document.getElementById("btn-kotek");
    let piesekBtn = document.getElementById("btn-piesek");

    let miejsce = document.getElementById("miejsce");

    kotekBtn.addEventListener("click", function () {
        kotekBtn.style.color = "red";
        piesekBtn.style.color = "";

        miejsce.innerHTML = `<img src="https://dinoanimals.pl/wp-content/uploads/2012/06/Lew.jpg" width="300px" alt="kotek" />`
    })

    piesekBtn.addEventListener("click", function () {
        piesekBtn.style.color = "red";
        kotekBtn.style.color = "";

        miejsce.innerHTML = `<img src="https://images.immediate.co.uk/production/volatile/sites/63/2024/08/wilk-szary-a2bd7e2.jpeg" width="300px" alt="kotek" />`
    })
}