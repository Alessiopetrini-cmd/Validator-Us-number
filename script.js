const bCheck = document.getElementById("check-btn");
const bReset = document.getElementById("clear-btn");
const bInput = document.getElementById("user-input");
const result = document.getElementById("results-div");


function Check(){
 let number = bInput.value;
  if(number === ""){
    alert("Please provide a phone number");
  }                   //filtraggio qui sotto tramite regix
  if(/^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/.test(number)){
      result.style.display = "block";
      result.style.margin = "auto";
      result.style.fontSize= "25px";
      result.innerHTML = "valid US number: "+ number;
  }
  else{
      result.style.display = "block";
      result.style.margin = "auto";
      result.style.fontSize= "25px";
      result.innerHTML = "Invalid US number: "  + number;
  }
}

function Reset(){
   bInput.value= "";
   result.innerHTML= "";

}


//output giusto
//result.style.display = "block";
//result.style.margin = "auto";
//result.innerHTML = "Invalid US number: "+number;
    