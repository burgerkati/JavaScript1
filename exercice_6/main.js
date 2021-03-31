function checkAge() {
	var age = document.getElementById('age').value;
	if (age >= 18) {
		alert('Vous êtes majeur(e)');
	} else {
		alert('Vous êtes mineur(e)');
	}
}
