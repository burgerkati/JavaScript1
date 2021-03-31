// function named 'testPromptDialog'
function testPromptDialog() {
	let result = prompt('Ton prénom:');
	if (isNaN(result) || result != empty) {
		alert('Bonjour : ' + result);
	} else {
		alert('Veuillez vérifier votre saisie!')
	}
}
testPromptDialog();
