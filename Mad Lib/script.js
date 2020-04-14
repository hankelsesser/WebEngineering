
let button = document.getElementById("submitButton");
button.addEventListener("click", getWords);


function getWords() {
    var output1 = document.getElementById("input1").value;
    var output2 = document.getElementById("input2").value;
    var output3 = document.getElementById("input3").value;
    var output4 = document.getElementById("input4").value;
    var output5 = document.getElementById("input5").value;
    var output6 = document.getElementById("input6").value;
    var output7 = document.getElementById("input7").value;
    var output8 = document.getElementById("input8").value;
    var output9 = document.getElementById("input9").value;
    var output10 = document.getElementById("input10").value;
    var output11 = document.getElementById("input11").value;

    document.getElementById("story").innerHTML = "Once upon a time there was a boy named" + output1 + ". " + output1 + ", had the day off from their job at" + output2 + " Incorperated, so instead of" + output3 + "" + output4 +"at work,"  + output1 + " decided to " + output5+ "around town until he found a" + output6 + " " + output7 + " who they named" + output8 + ". " + output1 +" and " + output8 + ", "+ output9 + " around until they got too" +output10+ ". The day had been so" +output11+ " that "+output1+ "wished that this day would never end!" </p>;
    document.getElementById("story").style.display = "center";
    document.getElementById("story").style.textalign = "block";
    }
  }

//   document.getElementById("input1").innerHTML = document.getElementById("output1").value;
//   document.getElementById("input2").innerHTML = document.getElementById("output2").value;
//   document.getElementById("input3").innerHTML = document.getElementById("output3").value;
//   document.getElementById("input4").innerHTML = document.getElementById("output4").value;
//   document.getElementById("input5").innerHTML = document.getElementById("output5").value;
//   document.getElementById("input6").innerHTML = document.getElementById("output6").value;
//   document.getElementById("input7").innerHTML = document.getElementById("output7").value;
//   document.getElementById("input8").innerHTML = document.getElementById("output8").value;
//   document.getElementById("input9").innerHTML = document.getElementById("output9").value;
//   document.getElementById("input10").innerHTML = document.getElementById("output10").value;
//   document.getElementById("input11").innerHTML = document.getElementById("output11").value;

}
