var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

function getNewName(name) {
    var name = prompt('Podaj imie jakie chcesz dodac');
    if (allNames.includes(name)) {
        alert('Podane imie znajduje sie juz w bazie');
    } else {
        allNames.push(name);
        document.write('Dodales imie ' + name + ' do bazy' + '<br>');
        return '';
    }
}

function printArray(array) {
    for (i = 0; i < array.length; i++) {
        document.write(array[i] + '<br>');
    }
    return '';
}




document.write(getNewName(allNames));

document.write('Baza aktualnie zawiera następujące imiona: ');
document.write(printArray(allNames));
