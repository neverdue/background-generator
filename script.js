var _ = require('lodash');

console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

css.textContent = ("linear-gradient(to right, rgb(255,0,0), rgb(255,255,0))");

function generateRandom() {
	// storing all letter and digit combinations
	// for html color code
	var letters = "0123456789ABCDEF";

	// html color code starts with #
	var colorPehla = '#';
	var colorDusra = '#';
	// generating 6 times as HTML color code consist
	// of 6 letter or digits
	for (var i = 0; i < 6; i++) {
		colorPehla += letters[(Math.floor(Math.random() * 16))];
	}

	for (var i = 0; i < 6; i++) {
		colorDusra += letters[(Math.floor(Math.random() * 16))];
	}
	console.log(colorPehla);
	console.log(colorDusra);
	setGradientRandom(colorPehla, colorDusra);
}

function setGradientRandom(colorPehla, colorDusra) {
	body.style.background =
	"linear-gradient(to right, "
	+ colorPehla
	+ ", "
	+ colorDusra
	+ ")";

	color1.value = colorPehla;
	color2.value = colorDusra;
	css.textContent = body.style.background + ";";
}

button.addEventListener("click", generateRandom);



function setGradient() {
	console.log(color1.value, color2.value);
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
