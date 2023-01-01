var listItem = document.querySelectorAll(".list-item");
var main = document.querySelectorAll(".main-container");


listItem.forEach((pig, index) => {
    pig.addEventListener("click", () => {
        listItem.forEach((pig) => pig.classList.remove("active"));

        pig.classList.add("active");

        main.forEach((mainItem) => {
            mainItem.classList.remove("nelson");
        })

        main[index].classList.add("nelson");

    });
});

function time() {
    var time = document.querySelector(".time");
    let personTime = new Date();

    time.innerHTML = personTime.toLocaleTimeString();
    time.style.color = 'var(--light-green)';
}