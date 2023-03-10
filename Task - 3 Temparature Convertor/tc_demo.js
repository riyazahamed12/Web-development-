function convert() {
	let temperature = document.getElementById("temperature").value;
	let from = document.getElementById("from").value;
	let to = document.getElementById("to").value;
	let result = document.getElementById("result");
	let error = document.getElementById("error");

	if (isNaN(temperature)) {
		error.textContent = "Please enter a valid number";
		result.textContent = "";
		return;
	}

	error.textContent = "";

	if (from === to) {
		result.textContent = temperature + " " + from.toUpperCase();
		return;
	}

	let celsius;
	let fahrenheit;
	let kelvin;

	switch (from) {
		case "celsius":
			celsius = parseFloat(temperature);
			break;
		case "fahrenheit":
			fahrenheit = parseFloat(temperature);
			celsius = (fahrenheit - 32) * 5 / 9;
			break;
		case "kelvin":
			kelvin = parseFloat(temperature);
			celsius = kelvin - 273.15;
			break;
		default:
			break;
	}

	switch (to) {
		case "celsius":
			result.textContent = celsius.toFixed(2) + " " + to.toUpperCase();
			break;
		case "fahrenheit":
			fahrenheit = celsius * 9 / 5 + 32;
			result.textContent = fahrenheit.toFixed(2) + " " + to.toUpperCase();
			break;
		case "kelvin":
			kelvin = celsius + 273.15;
			result.textContent = kelvin.toFixed(2) + " " + to.toUpperCase();
			break;
		default:
			break;
	}
}