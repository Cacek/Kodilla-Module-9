    var list = document.getElementById('list');
    var add = document.getElementById('btn-addElem');
    
    add.addEventListener('click', function() {
        var x = document.getElementsByTagName('li').length;
        list.innerHTML += "<li>item " + x + "</li>";
        console.log('przycisk klikniety'); 
    })