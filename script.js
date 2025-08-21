const container = document.querySelector("#con");
const gridButton= document.querySelector(".grid");
const clearButton= document.querySelector(".clear");

gridButton.addEventListener("click", () => {
    const answer = prompt("How many rows/columns do you want?")
});

clearButton.addEventListener("click", () => {
    const allDivs = document.querySelectorAll("div");

    allDivs.forEach(div => {
    div.style.backgroundColor = "white";
    })
});

for (let i = 1; i < 257; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("div" + i);
    container.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "green";
    });
};
