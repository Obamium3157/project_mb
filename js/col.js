function set_col(col) {
    sessionStorage.setItem('color', col)
    setImage(sessionStorage.getItem('color'))
}

function setImage(col) {
    switch (col) {
        case 'yellow': document.getElementById('view_color').src = "/img/yel.png"; break;
        case 'lightblue': document.getElementById('view_color').src = "/img/bb.png"; break;
        case 'red': document.getElementById('view_color').src = "/img/red.png"; break;
        case 'blue': document.getElementById('view_color').src = "/img/blue.png"; break;
    }
}