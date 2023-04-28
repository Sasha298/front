function checkText() {
	const input = document.getElementById("inputText").value;

	if (input === "") {
		alert("Введіть текст!");
	} else if (input.includes("hello")) {
		document.body.style.backgroundColor = "#A4D0A4";
	} else if (input.includes("world")) {
		document.body.style.backgroundColor = "#B8E7E1";
	} else {
		document.body.style.backgroundColor = "#FF6969";
	}
}