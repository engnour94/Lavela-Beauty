alert('Welcome To Lavella Beauty Shop');
console.log("hello");


function nam() {

    var naming = prompt("enter your name");
    console.log(naming);
    document.write('Hi  ' + naming)
}
nam()

var buy = confirm("Do you want to buy?", "Default");




 if (buy == true) {
    alert("she is a buyer");
    var order = prompt("What do you want to buy foundation, eye pallettes, nails, lipstick **or** mascara?");

    while (order !== "foundation" && order !== "eye pallettes" && order !== "nails" && order !== "lipstick" && order !== "mascara") {
        order = prompt("What do you want to buy foundation, eye pallettes, nails, lipstick **or** mascara?");
    }

    var itemorder = '';


    if (order == "foundation") {

        itemorder = '<img src ="f.jpg" width="100"; height="100";>';
    }
    else if (order == "eye pallettes") {
        itemorder = '<img src ="e.jpg" width="100"; height="100";>';
    }
    else if (order == "nails") {
        itemorder = '<img src ="n.jpg" width="100"; height="100";>';

    }
    else if (order == "lipstick") {
        itemorder = '<img src ="l.jpg" width="100"; height="100";>';
    }

    else if (order == "mascara") {
        itemorder = '<img src ="m.jpg" width="100"; height="100";>';
    }


    var numofitem = prompt("What is the number of item want to buy?");
    var result = '';
    for (var i = 0; i < numofitem; i++) {
        result = result + itemorder;

    }

    document.write(result);

}
else {
    alert("she is a visitor");
}

 