var color_id = 0
var border_id = 0

function set_col(c_id, b_id) {
    color_id = c_id
    border_id = b_id
}

function get_col() {
    switch (color_id) {
        case 0: return 'yellow'
        case 1: return 'lightblue'
    }

    return 0
}
function get_border() {
    return 1
}