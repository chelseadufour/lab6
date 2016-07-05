var nameString = function (name) {
	return("I am " + name);
};
console.log(nameString("Chelsea"));

var greeting = function (name) {
	console.log(name);
}; 
greeting("Chelsea");

var foodDemand = function(food) {
	console.log("I want" + " " + food);
};
foodDemand("pizza");


var convertTemp = function(temp) {
	console.log((temp-32)*(5/9) + " Temp in F");
};
convertTemp(65);

var convertTemp = function(temp) {
	console.log((temp*(9/5)+32) + " Temp in C");
};
convertTemp(-40);

