const url = "https://official-joke-api.appspot.com/random_joke";

async function getJoke() {
	const heading = document.querySelector("h2");
	try {
		const respons = await fetch(url);
		const results = await respons.json();

		console.log(results);

		heading.innerHTML = results.type + " " + "Joke";

		const setup = document.querySelector(".setup");
		setup.innerHTML = results.setup;

		const punchline = document.querySelector(".punchline");
		punchline.innerHTML = results.punchline;

		const title = document.querySelector("h1");
		title.innerHTML = results.setup;
	} catch (error) {
		heading.innerHTML = "an error occured";
		console.log(error);
	}
}

getJoke();
