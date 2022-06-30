function set_col(col) {
    sessionStorage.setItem('color', col)
    change_text()
}

function sizeUP(id) {
    document.getElementById(id).style.width = "375px"
    // document.getElementById(id).style.transform = 'translate(0, 500px)'
    document.getElementById(id).style.height = "375px"
}

function change_text() {
    switch(sessionStorage.getItem('color')) {
        case 'yellow': document.getElementById('col_txt').innerHTML = '(Текущий цвет: жёлтый)'
            break
        case 'lightblue': document.getElementById('col_txt').innerHTML = '(Текущий цвет: светло-синий)'
            break
        case 'red': document.getElementById('col_txt').innerHTML = '(Текущий цвет: красный)'
            break
        case 'blue': document.getElementById('col_txt').innerHTML = '(Текущий цвет: синий)'
            break
        default: document.getElementById('col_txt').innerHTML = '(Текущий цвет: жёлтый)'
    }
}