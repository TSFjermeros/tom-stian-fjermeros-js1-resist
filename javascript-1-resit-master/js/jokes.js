const url = "https://official-joke-api.appspot.com/random_ten";

async function getJoke() {
	const type = document.querySelector(".joke details");
	try {
		const respons = await fetch(url);
		const results = await respons.json();

		console.log(results);

		type.innerHTML = results.type;
	} catch (error) {
		console.log(error);
	}
}

async function getJokes() {
	const respons = await fetch(url);
	const results = await respons.json();

	displayJokes(results);
}

function displayJokes(joke) {
	const container = document.querySelector(".container");

	let html = "";

	for (let i = 0; i < 5; i++) {
		html += `<div class="card">
       				 <div class="joke-detail">
						<h4 class="type">${joke[i].type}</h4>
						<div class="setup">${joke[i].setup}</div>
						<div class="punchline">${joke[i].punchline}</div>
        			</div>
 				 </div>`;
	}
	container.innerHTML = html;
}
getJokes();
