var tree = prompt('Podaj wysokosc choinki: ');

function drawTree(tree) {
    for (var i = 1; i <= tree; i++) 
    {
        for (var j = i; j < tree; j++) {
            console.log(' ');
        }

        for (var j = 1; j <= (2 * i - 1); j++) {
            console.log('*');
        }

    console.log('\n');
    }

}

console.log(drawTree(tree));



