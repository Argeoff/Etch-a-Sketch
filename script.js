const container = document.querySelector("#con");
const gridButton= document.querySelector(".grid");
const clearButton= document.querySelector(".clear");

gridButton.addEventListener("click", () => {
    let answer = prompt("How many rows/columns do you want?");
    if (answer < 100){
        container.replaceChildren(); // removes all children
        createGrid(answer);
    }else{{
        alert("Please enter a number less than 100!");
    }}
});

clearButton.addEventListener("click", () => {
    const allDivs = document.querySelectorAll("div");

    allDivs.forEach(div => {
    div.style.backgroundColor = "white";
    })
});

function createGrid(answer){
    const boxSize = 760/answer;
    for (let i = 0; i < (answer*answer); i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("div" + i);
        newDiv.style.width = boxSize + "px";
        newDiv.style.height = boxSize + "px";
        container.appendChild(newDiv);
        
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "green";
        });
    };
};

createGrid(16);