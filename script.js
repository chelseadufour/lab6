
var d = prompt("Enter temperature");
var u = prompt("Enter temperature unit, C or F");

function convertTemp(degrees, units) {
	if (units === "F") {
		return((degrees-32)*5/9);
	} else {
		return((degrees*9/5)+32);
	}
}
// var units = convertTemp(212, "C");
var units = convertTemp(d, u);
document.write(units + " is the temperature after conversion");

// console.log(convertTemp(212, "C"));
// console.log(convertTemp(32, "C"));
// console.log(convertTemp(65, "C"));
// console.log(convertTemp(-40, "F"));










