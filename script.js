"use strict";

window.addEventListener("DOMContentLoaded", coolText);

function coolText() {
    // Select coolText
    const coolText = document.querySelector("#cooltext");

    // Get text to animate and split up each letter and make it an array
    let textToAnimate = Array.from(coolText.textContent);

    console.log(textToAnimate);

    // Remove text from screen
    coolText.textContent = "";

    textToAnimate.forEach((letter, index) => {
        const animateLetter = document.createElement("span");
        animateLetter.classList.add("letter", "a-fade-in-bottom");
        animateLetter.style.setProperty("--letter", index);
        if (letter === " ") {
            animateLetter.innerHTML = "&nbsp;";
        } else {
            animateLetter.textContent = letter;
        }
        coolText.append(animateLetter);
    });
}
