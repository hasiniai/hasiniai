function selectElements() 
{ 
let titlejs = document.getElementById("title"); 
titlejs.style.color = "blue"; 
let messagejs = document.getElementsByClassName("message")[0]; 
messagejs.style.color = "green"; 
let paragraphs = document.getElementsByTagName("p"); 
paragraphs[1].style.backgroundColor = "yellow"; 
}