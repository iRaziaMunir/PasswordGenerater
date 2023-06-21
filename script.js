let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let UpperCase = document.getElementById('UpperCase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');


    sliderValue.textContent = inputSlider.value;
    inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})
let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let UpperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";
let allChars = "";


if (allChars == " "|| allChars.length == 0) {
    return genPassword;
    
}

let i = 1;
while (i <= inputSlider.value) {
    genPassword = allChars.charAt(Math.floor(Math.random()* allChars.length));
    i++;

}
 function generatePassword(){
    let genPassword = '';
    let allChars = "";
        
    allChars += lowercase.checked ? lowerCharacters : "";
    allChars += UpperCase.checked ? UpperCharacter : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

//     genPassword = UpperCharacter.charAt(Math.floor(Math.random()* UpperCharacter.length));
    return genPassword;
 }