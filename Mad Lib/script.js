
let button = document.getElementById("submitButton");
button.addEventListener("click", getWords);


function getWords() {
  var inputs = document.getElementsByTagName("input");
  for(i in inputs) {
    if(inputs[i].value == "") {
      return alert("Make sure you fill out every field");
    }
  }

  document.getElementById("input1").innerHTML = document.getElementById("output1").value;
  document.getElementById("input2").innerHTML = document.getElementById("output2").value;
  document.getElementById("input3").innerHTML = document.getElementById("output3").value;
  document.getElementById("input4").innerHTML = document.getElementById("output4").value;
  document.getElementById("input5").innerHTML = document.getElementById("output5").value;
  document.getElementById("input6").innerHTML = document.getElementById("output6").value;
  document.getElementById("input7").innerHTML = document.getElementById("output7").value;
  document.getElementById("input8").innerHTML = document.getElementById("output8").value;
  document.getElementById("input9").innerHTML = document.getElementById("output9").value;
  document.getElementById("input10").innerHTML = document.getElementById("output10").value;
  document.getElementById("input11").innerHTML = document.getElementById("output11").value;

  document.getElementById("story").style.display = "block";

}