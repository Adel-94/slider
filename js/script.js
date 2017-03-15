
var myvar = setInterval(seklideyis1,'3000');
var click = 0;
function seklideyis1() {
    click++;
    if (click == 1) {
        document.getElementById('picture').setAttribute('src', 'images/logo2.jpg');
    } else if (click == 2) {
        document.getElementById('picture').setAttribute('src', 'images/logo3.jpg');
    } else {
        document.getElementById('picture').setAttribute('src', 'images/logo1.jpg');
        click = 0;
    }

}
function seklideyis2() {
    click++;
    if (click == 1) {
        document.getElementById('picture').setAttribute('src', 'images/logo3.jpg');
    } else if (click == 2) {
        document.getElementById('picture').setAttribute('src', 'images/logo1.jpg');
    } else {
        document.getElementById('picture').setAttribute('src', 'images/logo2.jpg');
        click = 0;
    }

}

seklideyis1();
