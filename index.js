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
    alert("This calculator app was made by IPCMF on GitHub.\nThis project was made possible thanks to 'Bro Code' on YouTube! [https://www.youtube.com/watch?v=I5kj-YsmWjM]\nThis Calculator was made using HTML, functions with Java and was given a glow-up by CSS.")
}