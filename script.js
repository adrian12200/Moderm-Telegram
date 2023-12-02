const head = document.getElementById("head");
const dynamicText = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const quote = document.getElementById("quote");
const from = document.getElementById("from");
const elements = [head, dynamicText, second, third, quote, from];
const words = ["Hi my love,", "Happiest birthday to my one and only baby! I just want you to know that you have been great this year, with all the success you had be it small or big. I commend you for doing your best, giving your all, staying up all night and doing things necessary to achieve those success, i'm so proud of you!", "You may had the best moments of your life this year but you also had your rock bottom. You laughed and smiled but you also cried alot of tears. I want to give spotlight to you for not giving up through all the struggles and challenges you faced. it takes so much courage to at least get out of bed sometimes but you managed to do so, you wanted to stop but you didn't, so thank you, thank you for believing in yourself and staying in this world.", "Now you're a year older, please value every lessons you picked up from your failures and achievements as it will make you a better person. Keep believing and fighting because God has tons of blessings prepared for you. Explore, find things out without fear and keep doing the things you love and passionate about, that's what makes you, you! Everything you did lead you to this day, you deserve all the good things that came and will come to you so be proud of yourself, pat yourself on the back and let's do it again next year!", "If you would be a college course, you would be a FINE ART", "Sincerely, your future husband :)"];
const user = document.getElementById("textbox1");
const birthdate = document.getElementById("birthdate");

let elementIndex = 0;
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentElement = elements[elementIndex];
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    currentElement.textContent = currentChar;

    if(charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 20);
    }else if(charIndex >= currentWord.length){
        wordIndex = (wordIndex + 1) % words.length;
        elementIndex = (elementIndex + 1) % elements.length;
        charIndex = 0;
        if (wordIndex === 0 && elementIndex === 0) {
            return; // Stop the typing effect
        }
        setTimeout(typeEffect, 20);
    }
}

typeEffect();

function registerUser() {
    const userName = user.value;
    const bday = birthdate.value;
    const encodeName = encodeURIComponent(userName);
    window.location.href = "notif.html?name=" + encodeName;

}
