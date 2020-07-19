const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", validateForm);

function validateForm() {
	event.preventDefault();

	const firstNameValue = firstName.value;

	if (validateLength(firstNameValue, 1) === true) {
		firstNameError.style.display = "none";
	} else {
		firstNameError.style.display = "block";
	}

	const lastNameValue = lastName.value;

	if (validateLength(lastNameValue, 3) === true) {
		lastNameError.style.display = "none";
	} else {
		lastNameError.style.display = "block";
	}

	const emailValue = email.value;

	if (validateEmail(emailValue) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	const subjectValue = subject.value;

	if (validateLength(subjectValue, 7) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}

	const messageValue = message.value;

	if (validateLength(messageValue, 15) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
}

function validateLength(value, lengthToCheck) {
	const trimmedValue = value.trim();
	if (trimmedValue.length >= lengthToCheck) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(emailValue) {
	const regEx = /\S+@\S+\.\S+/;

	if (regEx.test(emailValue)) {
		return true;
	} else {
		return false;
	}
}
