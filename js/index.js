// initialize count as 0
// listen to the clicks on the increment button
//incement the count variable when the button is clicked (log it out)
//change the count-el in the HTML to refer to the new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(saveEl)
 
let count = 0;
function increment (){
    count+=1;
    countEl.textContent = count;
}

//Create a function, save(), which logs out the count when it's called

function save () {  
    let countStr = count + "-"
    // Create a variable that contains both the count and the dash separtor
    //Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB. Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0;
    count = 0; 
}
save();


 