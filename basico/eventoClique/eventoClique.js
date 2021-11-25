function addPlus() { 
    let numStr = document.querySelector("#num").innerHTML; 
    let num = parseInt(numStr); num++; 
    document.querySelector("#num").innerHTML = num; 
} 