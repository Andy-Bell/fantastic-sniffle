/*math for the various conversions*/

/*function cF(units) {
  
  var product = (units * 1.8) + 32;   

  
  if ( typeof product !== 'undefined' ) {
    return product;
  } else {
    return 'fahrenheit not defined';
  }
}

function cK(units){
  var product = units + 273.15;
  
  if ( typeof product !== 'undefined' ) {
    return product;
  } else {
    return 'kelvin not defined';
  }  
}

function fK(units) {
  
  var product = (units+459.67) * 5/9 ;   

  
  if ( typeof product !== 'undefined' ) {
    return product;
  } else {
    return 'kelvin not defined';
  }
}
function fC(units) {
  var product = (units -32)/1.8;
  
  if ( typeof product !== 'undefined' ) {
    return product;
  } else {
    return 'Celcius not defined';
  }
}
function kF(units){
  var product = units * (9-5) - 459.67;
  
  if ( typeof product !== 'undefined' ) {
    return product;
  } else {
    return 'fahrenheit not defined';
  }
}

function kC(units){
  var product = units- 273.15
  if ( typeof product !== 'undefined' ) {
    return product;
  } else {
    return 'Celcius not defined';
  }
  
}*/

function calculateTemp(){
  var units = document.getElementById("initial").value;
  var startUnit = document.getElementById("startUnit").value;
  var endUnit = document.getElementById("endUnit").value;
  
  
  if(startUnit == endUnit){
    return;
  }else if(startUnit == "c"){
    if(endUnit=="f"){
      var product = (units * 1.8) + 32;
    }else{
      var product = (units*1) + 273.15;
    }
    
  }else if(startUnit =="f"){
    if(endUnit =="c"){
      var product = (units -32)/1.8;
    }else{
      var product = (units+459.67) * 5/9 ;
    }
  }else{
    if(endUnit =="c"){
      var product = units- 273.15 
    }else{
      var product = units * (9-5) - 459.67;
    }
  }
  
  
  
  //display results
  
  document.getElementById("product").style.display = "block";
  document.getElementById("value").innerHTML = product;
  document.getElementById("unit").innerHTML = endUnit;
}

//Hide Results amount on load

document.getElementById("product").style.display = "none";


//Clicking the button calls our function
document.getElementById("calculate").onclick = function() {calculateTemp();};