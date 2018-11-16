function myFunction1() {
    document.getElementById("starters").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn starters')) {

        var dropdowns = document.getElementsByClassName("dropdown-content starters");

    }
}

function myFunction2() {
    document.getElementById("burgers").classList.toggle("show");
}
window.onclick = function (event) {

    if (!event.target.matches('.dropbtn burgers')) {

        var dropdowns = document.getElementsByClassName("dropdown-content burgers");

    }
}

function myFunction3() {
    document.getElementById("fountain").classList.toggle("show");
}
window.onclick = function (event) {

    if (!event.target.matches('.dropbtn fountain')) {

        var dropdowns = document.getElementsByClassName("dropdown-content fountain");
    }
}

function myFunction4() {
    document.getElementById("brunch").classList.toggle("show");
}
window.onclick = function (event) {

    if (!event.target.matches('.dropbtn brunch')) {

        var dropdowns = document.getElementsByClassName("dropdown-content brunch");


    }


}
