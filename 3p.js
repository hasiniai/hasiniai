document.addEventListener("DOMContentLoaded", function () { 
    let button = document.getElementById("myButton"); 
    button.addEventListener("click", function () { 
    let text = document.getElementById("text"); 
    text.textContent = "The text has been changed!"; 
    text.style.color = "green"; 
    }); 
    });