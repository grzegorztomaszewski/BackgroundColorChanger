const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
const hexCode = document.getElementById("hexCode");
const btSwitch = document.getElementById("btSwitch");
const body = document.querySelector("body");

btSwitch.addEventListener("click", () => {
    
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * 16);
        hexColor = hexColor + numbers[random];
        console.log(hexColor);
    }
    hexCode.innerText = hexColor;
    body.style.backgroundColor = hexColor;
});