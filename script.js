const container = document.querySelector("#con");

for (let i = 1; i < 257; i++){
    const newDiv = document.createElement("div");
    newDiv.id = "div" + i;
    newDiv.classList.add("div" + i);
    container.appendChild(newDiv);

    newDiv.addEventListener("mouseover", () => {
        newDiv.style.backgroundColor = "green";
    });
};
