var tree = prompt('Podaj wysokosc choinki: ');

function drawTree(tree) {
    var star='';

    for (var i = 1; i <= tree; i++) 
    {
        for (var j = i; j < tree; j++) {
            star += '  ';
            document.write("&nbsp;	&nbsp;");
        }

        for  (j = 1; j <= (2 * i - 1); j++) {
            star += ' * ';
            document.write(" * ");
        }
    document.write("<br>");
    console.log(star);
    }
return 0;
}

console.log(drawTree(tree));



