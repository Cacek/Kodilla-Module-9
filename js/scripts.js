var tree = prompt('Podaj wysokosc choinki: ');

function drawTree(tree) {
    debugger;
    for (var i = 1; i <= tree; i++) 
    {
        for (var j = i; j < tree; j++) {
            var star = '';
            star += ' ';
            document.write("&nbsp;");
        }

        for  (j = 1; j <= (2 * i - 1); j++) {
            star += ' * ';
            document.write(" * ");
        }
    document.write("<br>");
    console.log(star);
    }

}

console.log(drawTree(tree));



