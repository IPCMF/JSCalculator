const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}
function infoPage(){
    alert("This calculator app was made by IPCMF on GitHub.\nThis project was made possible thanks to 'Bro Code' on YouTube! [link on Public GitHub Page]\nThis Calculator was made using HTML, functions with JavaScript and was given a glow-up by CSS.")
}
