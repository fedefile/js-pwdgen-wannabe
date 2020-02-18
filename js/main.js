var nome = prompt('Nome');
var cognome = prompt ('Cognome');
var colorePreferito = prompt ('Colore preferito');
var data = new Date ()
var annoCorrente = data.getFullYear();
document.getElementById('psw').innerHTML = nome + ';' + cognome + ';' + colorePreferito + ';' + annoCorrente;
document.getElementById('container').setAttribute('class','visible');
