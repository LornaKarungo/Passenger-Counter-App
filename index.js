// javascript
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
     count += 1
     countEl.textContent = count    
 }
 
 function save(){
    let savel = count +" - "
    saveEl.textContent += savel
    console.log(count)
    countEl.textContent = 0
    count = 0
 }
