let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let UpperCase = document.getElementById('UpperCase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyIcon = document.getElementById('copyIcon');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
 passBox.value = generatePassword();
});

let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let UpperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

 function generatePassword()
 {
    let genPassword = "";
    let allowedCharacters;

    allowedCharacters
    let allChars = "";
        allChars += lowercase.checked ? lowerCharacters : "";
        allChars += UpperCase.checked ? UpperCharacter : "";
        allChars += numbers.checked ? allNumbers : "";
        allChars += symbols.checked ? allSymbols : "";

    if(allChars == " "|| allChars.length == 0) {
        return genPassword;
    }
    let i = 1;
    while(i<= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
        i++;
    }

//     genPassword = UpperCharacter.charAt(Math.floor(Math.random()* UpperCharacter.length));
    return genPassword;
 }

        copyIcon.addEventListener('click' , ()=>{
    if(passBox.value.length > 0) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.querySelector("path").setAttribute("d", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z");

        setTimeout(() => {
            copyIcon.querySelector("path").setAttribute("d", "M272 0H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128H192v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z");
        }, 3000);
    }

 });
 