
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

    document.getElementById("story").innerHTML = " Once upon a time there was a boy named <span id="output1">Name</span>. <span id="output1">Name</span> had the day off from their job at <span id="output2">Plural Noun</span> Incorperated, so instead of <span id="output3">Activity</span> <span id="output4">Plural Noun</span> at work, <span id="output1">Name</span>decided to <span id="output5">Verb</span> around town until he found a <span id="output6">Adjective</span> <span id="output7">Animal</span>, who they named <span id="output8">Name</span>. <span id="output1">Name</span> and <span id="output8">Name</span> <span id="output9">Verb</span> around until they got too <span id="output10">Adjective</span>. The day had been so <span id="output11">Adjective</span> that <span id="output1">Name</span> wished that this day would never end! </p>;
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
