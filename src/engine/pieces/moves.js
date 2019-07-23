import Square from '../square';
import Piece from './piece';
import Player from '../player';


exports.diagonal_move = function(current_location, limit){
    const move_row = current_location.row;
    const move_col = current_location.col;

    const moves = new Array();

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

    for (let i = 1; i < limit; i++) {
        moves.push({row : move_row + i, col : move_col + i});
        moves.push({row : move_row - i, col : move_col + i});
        moves.push({row : move_row + i, col : move_col - i});
        moves.push({row : move_row - i, col : move_col - i});
    }
    return checkOnBoard(moves);

};

//move = [1,0];

// class Direction {
//     constructor()
// }

exports.lateral_move = function(current_location, limit, board){
    const moves = new Array();
    for (let i = 1; i < limit; i++) {
        let squre_move = new Square(current_location.row, current_location.col + i)
        if (squre_move.col < 8 && squre_move.row < 8 && squre_move.col >= 0 && squre_move.row >=0){
            if (board.getPiece(squre_move) == null) {
                moves.push({row: squre_move.row , col: squre_move.col});
            }
            else {
                break
            }
        }
        else {
            break;
        }
    }

    
    
    for (let i = 1; i < limit; i++) {
        let squre_move = new Square(current_location.row, current_location.col - i)
        if (squre_move.col < 8 && squre_move.row < 8 && squre_move.col >= 0 && squre_move.row >=0){
            if (board.getPiece(squre_move) == null){
                moves.push({row: squre_move.row , col: squre_move.col});
            }
            else {
                break
            }
        }
        else {
            break;
        }
    }
    for (let i = 1; i < limit; i++) {
        let squre_move = new Square(current_location.row + i, current_location.col)
        if (squre_move.col < 8 && squre_move.row < 8 && squre_move.col >= 0 && squre_move.row >=0){
            if (board.getPiece(squre_move) == null){
                moves.push({row: squre_move.row , col: squre_move.col});
            }
            else {
                break
            }
        }
        else {
            break;
        }
    }
    for (let i = 1; i < limit; i++) {
        let squre_move = new Square(current_location.row - i, current_location.col)
        if (squre_move.col < 8 && squre_move.row < 8 && squre_move.col >= 0 && squre_move.row >=0){
            if (board.getPiece(squre_move) == null){
                moves.push({row: squre_move.row , col: squre_move.col});
            }
            else {
                break
            }
        }
        else {
            break;
        }
    }
    
    
    return moves
};

exports.knight_move = function(current_location, moves){
    let location_row = current_location.row;
    let location_col = current_location.col;

    // location = [location_row, location_col]
    // move = [2,1];


    // placesCanMove.push(location + move)
    moves.push({row: location_row + 2, col: location_col + 1}, {row: location_row + 1, col: location_col + 2});
    moves.push({row: location_row - 2, col: location_col + 1}, {row: location_row - 1, col: location_col + 2});
    moves.push({row: location_row + 2, col: location_col - 1}, {row: location_row + 1, col: location_col - 2});
    moves.push({row: location_row - 2, col: location_col - 1}, {row: location_row - 1, col: location_col - 2});

    return checkOnBoard(moves);
};


function checkOnBoard(moves) {
    return moves.filter(move => (move.row < 8 && move.row >= 0 && move.col < 8 && move.col >= 0));
}

// function checkIfBoardFree (moves) {

