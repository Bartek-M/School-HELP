// Zadanie 2
// Na stronie wyświetla się przycisk. Gdy najedziesz na niego kursorem, pojawi się obrazek Mikołaja, a obok niego wyświetli się tekst "Wybierz prezent 1, 2, 3". Po naciśnięciu klawisza "1" na klawiaturze, obok Mikołaja pojawi się zdjęcie prezentu 1. Analogicznie, po naciśnięciu "2" i "3" pojawią się zdjęcia prezentów 2 i 3. Strona powinna być podzielona na dwa div'y.
window.onload = function () {
    let przycisk = document.getElementById("pokaz-elementy");

    let lewyKontener = document.getElementById("lewy");
    let prawyKontener = document.getElementById("prawy");

    var pokazano = false;

    przycisk.addEventListener("mouseover", function () {
        if (pokazano) return;
        lewyKontener.innerHTML = `
            <img src="https://www.knall.com.pl/media/news/big/8e/8e39d8d6f7e588cd3309858949a6648e.jpeg"
            alt="Mikołaj" width="100%"/>

            <p>Wybierz prezent 1, 2, 3</p>
        `;

        window.addEventListener("keypress", function (e) {
            let src = "";
            
            if (e.key == "1") {
                src = "https://naklejkomania.eu/images-v2/2021/11/C1epTqz82fnJCqJztQtWgaDRp/normal/oryginalne-prezenty-swiateczne-5.jpg";
            } else if (e.key == "2") {
                src = "https://ocdn.eu/pulscms-transforms/1/AqIk9kuTURBXy8xOGM3YjQ5Yi1kNmZmLTRkNWYtYWZiOC1kODNmMGQ5YmY5MGUuanBlZ5KVAwAAzRXqzQxUkwXNBLDNAljeAAGhMAE";
            } else if (e.key == "3") {
                src = "https://perso.in/wp-content/uploads/2020/12/pexels-giftpunditscom-1666065.jpg";
            }
    
            if (src) {
                prawyKontener.innerHTML = `<img src="${src}" width="100%"/>`;
            }
        })

        pokazano = true;
    });
}