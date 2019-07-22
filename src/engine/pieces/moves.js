
exports.diagonal_move = function(current_location, moves){
    let move_row = current_location.row;
    let move_col = current_location.col;
    while (true) {
        move_row += 1;
        move_col += 1;
        if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
            break;
        }
        else {
            moves.push({row : move_row, col : move_col});
        }
    }
    move_row = current_location.row;
    move_col = current_location.col;
    while (true) {
        move_row -= 1;
        move_col += 1;
        if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
            break;
        }
        else {
            moves.push({row : move_row, col : move_col});
        }
    }
    move_row = current_location.row;
    move_col = current_location.col;
    while (true) {
        move_row += 1;
        move_col -= 1;
        if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
            break;
        }
        else {
            moves.push({row : move_row, col : move_col});
        }
    }
    move_row = current_location.row;
    move_col = current_location.col;
    while (true) {
        move_row -= 1;
        move_col -= 1;
        if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
            break;
        }
        else {
            moves.push({row : move_row, col : move_col});
        }
    }
    return moves;
};

exports.lateral_move = function(current_location, moves){
    for (let i = 0; i < 8; i++) {
        if (!(i === current_location.col)) {
            moves.push({row: current_location.row, col: i});
        }
    }
    for (let j = 0; j < 8; j++) {
        if (!(j === current_location.row)) {
            moves.push({row: j, col: current_location.col});
        }
    }
    return moves;
};

