const dynamic = document.querySelector(".container");
const divs = document.querySelector(".dynamic-divs");

dynamic.addEventListener("change", function (event) {
	console.log(event.target.value);

	const amount = event.target.value;

	divs.innerHTML = "";

	for (let i = 1; i <= amount; i++) {
		divs.innerHTML += `<div class="amount">${i}</div>`;
	}
});

/* document.getElementsByClassName("reset").onclick = function () {
	var field = document.getElementsByClassName("amount");
	field.value = field.defaultValue;
}; */
