//  7. Na stronie znajduje się duży prostokąt umieszczony na środku. W tym prostokącie wyświetla się liczba odpowiadająca wartości kodu ASCII litery, którą naciśniesz na klawiaturze. W kodzie należy uwzględnić obsługę zdarzenia dla naciśniętych klawiszy i przekształcić je na odpowiednią liczbę ASCII
window.onload = function () {
    let prost = document.getElementById("prost");

    window.addEventListener("keypress", function (e) {
        prost.innerText = e.key.charCodeAt()
        console.log(e)
    }) 
}