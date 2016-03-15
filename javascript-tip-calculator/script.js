//script.js

//Calculate Tip Function

function calculateTip() {
  //Store input data
  var billAmount= document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;
  
  //Quick Validation
  if(billAmount === ""){
    window.alert("Please enter a bill amount.");
    return;
  }else if(serviceQuality == 0){
    window.alert("Please set a service quality.");
    return;
  }
  if(numPeople===""||numPeople<=1){
    numPeople = 1;
    document.getElementById("each").style.display="none";
    
  }else{
    document.getElementById("each").style.display="block";
  }
  
  //Math
  
  var total = (billAmount*serviceQuality)/numPeople;
  total = Math.round(total*100) / 100;
  total = total.toFixed(2);
  
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}


//Hide tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Clicking the button calls our function
document.getElementById("calculate").onclick = function() {calculateTip();};

