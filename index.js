
 let count =0
 let countEl =  document.getElementById("count-el")

 function increment () {
     count = count + 1
    countEl.innerText=count     
 }
   

 function decrement () {
 
         
     
    count = count - 1
   countEl.innerText=count
   
    
}

function  clean(){
     count=0
    countEl.innerText=count
    
 }


 let numberOnTrain = document.getElementById("number-on-train")
 
 function save() {
    numberOnTrain.innerText = "Number of persons on the train is "  +   count   
 }


 

  


