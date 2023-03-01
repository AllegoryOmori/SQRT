let holiday;
let sayitaintso;
document.getElementById("c").onclick = function(){
holiday = document.getElementById("inthegarage").value;
holiday = Number(holiday);
sayitaintso = Math.sqrt(holiday);
document.getElementById("buddyholly").innerHTML = "The Square Root Number is: " + sayitaintso;
}