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
    alert("This calculator app was made by IPCMF on GitHub.\nThis project was made possible thanks to 'Bro Code' on YouTube! [https://www.youtube.com/watch?v=I5kj-YsmWjM]\nThis Calculator was made using HTML, functions with Java and was given a glow-up by CSS. Comparing this final product to the one of that I copied, I have it many more features, and a nicer look, thanks to the teachings of ChatGPT on how to do light mode and dark mode.")
}
const toggleButton = document.getElementById('modeToggle');
    const bodyElement = document.body;

    toggleButton.addEventListener('click', function() {
        bodyElement.classList.toggle('dark-mode');
        bodyElement.classList.toggle('light-mode');
    });

    // Optional: Set initial mode based on user preference or default to light mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        bodyElement.classList.add('dark-mode');
    } else {
        bodyElement.classList.add('light-mode');
    }

const allButtons = document.querySelectorAll('button');

toggleButton.addEventListener('click', function() {
    allButtons.forEach(button => {
        button.classList.toggle('dark-mode');
        button.classList.toggle('light-mode');
    });
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    allButtons.forEach(button => button.classList.add('dark-mode'));
} else {
    allButtons.forEach(button => button.classList.add('light-mode'));
}
const calculator = document.getElementById('calculator');
const circle = document.getElementById('circle');
toggleButton.addEventListener('click', function() {
    calculator.classList.toggle('dark-mode');
    calculator.classList.toggle('light-mode');
    display.classList.toggle('dark-mode');
    display.classList.toggle('light-mode');
    circle.classList.toggle('dark-mode');
    circle.classList.toggle('light-mode');
    
});

// Initial Mode Setting Based on User Preference or Default
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    calculator.classList.add('dark-mode');
    display.classList.add('dark-mode');
    circle.classList.add('dark-mode');
} else {
    calculator.classList.add('light-mode');
    display.classList.add('light-mode');
    circle.classList.add('light-mode');
}
