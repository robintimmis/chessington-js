
exports.diagonal_move = function(current_location, moves){
    let move_row = current_location.row;
    let move_col = current_location.col;

    // while (true) {
    //     move_row += 1;
    //     move_col += 1;
    //     if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
    //         break;
    //     }
    //     else {
    //         moves.push({row : move_row, col : move_col});
    //     }
    // }
    // move_row = current_location.row;
    // move_col = current_location.col;
    // while (true) {
    //     move_row -= 1;
    //     move_col += 1;
    //     if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
    //         break;
    //     }
    //     else {
    //         moves.push({row : move_row, col : move_col});
    //     }
    // }
    // move_row = current_location.row;
    // move_col = current_location.col;
    // while (true) {
    //     move_row += 1;
    //     move_col -= 1;
    //     if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
    //         break;
    //     }
    //     else {
    //         moves.push({row : move_row, col : move_col});
    //     }
    // }
    // move_row = current_location.row;
    // move_col = current_location.col;
    // while (true) {
    //     move_row -= 1;
    //     move_col -= 1;
    //     if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
    //         break;
    //     }
    //     else {
    //         moves.push({row : move_row, col : move_col});
    //     }
    // }

    for (let i = 1; i < 8; i++) {
        moves.push({row : move_row + i, col : move_col + i});
        moves.push({row : move_row - i, col : move_col + i});
        moves.push({row : move_row + i, col : move_col - i});
        moves.push({row : move_row - i, col : move_col - i});
    }

    return checkOnBoard(moves);

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

exports.knight_move = function(current_location, moves){
    let location_row = current_location.row;
    let location_col = current_location.col;


    moves.push({row: location_row + 2, col: location_col + 1}, {row: location_row + 1, col: location_col + 2});
    moves.push({row: location_row - 2, col: location_col + 1}, {row: location_row - 1, col: location_col + 2});
    moves.push({row: location_row + 2, col: location_col - 1}, {row: location_row + 1, col: location_col - 2});
    moves.push({row: location_row - 2, col: location_col - 1}, {row: location_row - 1, col: location_col - 2});

    return checkOnBoard(moves);
};


function checkOnBoard(moves) {
    const good_moves = new Array();

    for (let i = 0; i < moves.length; i++) {
        let move_row = moves[i].row;
        let move_col = moves[i].col;

        if  (!(move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0)) {
            good_moves.push(moves[i]);
        }
    }
    return good_moves;
}