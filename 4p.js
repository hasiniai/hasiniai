const btn1 = document.getElementById("btn1"); const btn2 = 
document.getElementById("btn2"); const btn3 = document.getElementById("btn3"); 
const output = document.getElementById("output"); btn1.addEventListener("click", 
function() 
{ 
output.textContent = "You clicked Button 1!"; output.style.color = "blue"; 
}); 
btn2.addEventListener("click", function() 
{ 
output.textContent = "You clicked Button 2!"; output.style.color = "green"; 
}); 
btn3.addEventListener("click", function() 
{ 
output.textContent = "You clicked Button 3!"; output.style.color = "red"; 
}); 