//
function displayInput(){
    let surname = document.getElementById('surname').value;
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    if(surname && name && city){
      alert('Votre Nom est : ' + surname + '\n' + 'Votre Prénom est : ' + name + '\n' + 'Vous habitez : ' + city);
    } else {
        alert('Veuillez saisir vos informations')
    }
  }
displayInput();
