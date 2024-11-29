var boddy = document.querySelector("body");
var butt = document.querySelector(".call-alert").addEventListener("click", function () {
    let div = document.createElement("div"); // Створюємо новий div
    boddy.append(div); // Додаємо div в кінець body // prepend
    let text = document.createElement("h1")
    div.prepend(text)
    div.style.cssText = `
    width: 200px;
    height: 400px;
    background-color: rgb(185, 43, 43);
    margin: auto;
    border-radius: 20px;
    `

});




