var a = prompt('Podaj a: ');
var h = prompt('Podaj h: ');

function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        document.writeln('Podales nieprawidlowe dane, wszystkie musza być większe od 0');
    } else {
        
        return  a * h / 2;
    }
}

document.writeln('Zmienna A: ' + a + '<BR>');
document.writeln('Zmienna H: ' + h + '<BR>');
document.writeln('Wynik :' + getTriangleArea(a,h)) ;
