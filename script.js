const text =
"Java Developer | Python Programmer | Web Technology Enthusiast | Quick Learner";

let index = 0;

function typeEffect() {
    const typingElement = document.querySelector(".typing");

    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();
