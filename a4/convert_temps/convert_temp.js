"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

var convertTemp = function() {
    let compute;

    if($("to_celsius").checked == true)
    {
        compute = (parseFloat(entered) - 32) * 5/9;
    }
    else
    {
        compute = (parseFloat(entered) * 9/5) + 32;
    }
    $("degrees_computed").value = compute;
}

var toCelsius = function() {
    $("degree_label_1").innerHTML = "Enter F Degrees";
    $("degree_label_2").innerHTML = "Degrees Celcius";
    clearTextBoxes();
}

var toFahrenheit = function() {
    $("degree_label_1").innerHTML = "Enter C Degrees";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit";
    clearTextBoxes();
}


window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};