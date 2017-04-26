var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animal = animal.toUpperCase();
var textUpdate = text.replace('Papugi', animal);

document.write(textUpdate);

var textSliced = textUpdate.slice(0, textUpdate.length / 2);
document.write('<BR>' + textSliced);