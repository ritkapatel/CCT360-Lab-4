// initalize variables
let flavour="";
let typeofbake = "";
let finalimage = document.getElementById("decision");

// set flavour to users choice
function selectedflavour(item) {
    flavour = item;
}

// set typeofbake to users choice
function selectedtype(item) {
    typeofbake = item;
}

// when user clicks button
function bakingFunction() {
    // all of the decisions user can make and alert and show user final result
    if (flavour === "Chocolate" && typeofbake === "Cake" ) {
        alert("You should make a chocolate cake!");
        finalimage.src = "css/images/chocolatecake.jpeg";
    }
    else if (flavour === "Chocolate" && typeofbake === "Cookies" ) {
        alert("You should make a double chocolate cookies!");
        finalimage.src = "css/images/dccookie.jpg";
    }
    else if (flavour === "Chocolate" && typeofbake === "Mousse" ) {
        alert("You should make a chocolate cookies and cream mousse!");
        finalimage.src = "css/images/ccmousse.jpeg";
    }
    else if (flavour === "Chocolate" && typeofbake === "Pastry" ) {
        alert("You should make chocolate crossiants");
        finalimage.src = "css/images/ccrossiant.jpg";
    }
    else if (flavour === "Vanilla" && typeofbake === "Cake" ) {
        alert("You should make a vanilla cake!");
        finalimage.src = "css/images/vanillacake.jpeg";
    }
    else if (flavour === "Vanilla" && typeofbake === "Cookies" ) {
        alert("You should make vanilla sugar cookies!");
        finalimage.src = "css/images/vanillacookies.jpg";
    }
    else if (flavour === "Vanilla" && typeofbake === "Mousse" ) {
        alert("You should make a vanilla cheesecake mousse!");
        finalimage.src = "css/images/vanillamousse.jpg";
    }
    else if (flavour === "Vanilla" && typeofbake === "Pastry" ) {
        alert("You should make cream puffs!");
        finalimage.src = "css/images/cpuff.jpg";
    }
    else if (flavour === "Fruity" && typeofbake === "Cake" ) {
        alert("You should make a strawberry shortcake!");
        finalimage.src = "css/images/strawberry.jpg";
    }
    else if (flavour === "Fruity" && typeofbake === "Cookies" ) {
        alert("You should make a Dried fruit cookies!");
        finalimage.src = "css/images/fruitcookie.jpg";
    }
    else if (flavour === "Fruity" && typeofbake === "Mousse" ) {
        alert("You should make mango mousse!");
        finalimage.src = "css/images/mangomousse.webp";
    }
    else if (flavour === "Fruity" && typeofbake === "Pastry" ) {
        alert("You should make fruit tarts");
        finalimage.src = "css/images/fruittart.jpeg";
    }
    else if (flavour === "Caramel" && typeofbake === "Cake" ) {
        alert("You should make a salted caramel cake!");
        finalimage.src = "css/images/caramelcake.jpeg";
    }
    else if (flavour === "Caramel" && typeofbake === "Cookies" ) {
        alert("You should make a salted caramel dark chocolate cookies!");
        finalimage.src = "css/images/caramelcookies.jpg";
    }
    else if (flavour === "Caramel" && typeofbake === "Mousse" ) {
        alert("You should make a coffee caramel mousse!");
        finalimage.src = "css/images/caramelmousse.webp";
    }
    else if (flavour === "Caramel" && typeofbake === "Pastry" ) {
        alert("You should make caramel pie!");
        finalimage.src = "css/images/caramelpie.jpg";
    }
    else {
        alert("Please select an item from both categories!!")
    }
}