import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current_location = board.findPiece(this)
        let moves = new Array();


        let move_row = current_location.row;
        let move_col = current_location.col;
        while (true) {
            move_row += 1;
            move_col += 1;
           if  (move_row > 7 || move_row < 0 || move_col > 7 || move_col < 0) {
               break;
           }
           else {
               moves.push({row : move_row, col : move_col})
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
               moves.push({row : move_row, col : move_col})
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
               moves.push({row : move_row, col : move_col})
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
               moves.push({row : move_row, col : move_col})
           }
        }

        // for (let i = 0; i < 8; i++) {
        //     for (let j = 0; j < 8; j++) {
        //         if (Math.abs(current_location.row - i) === (Math.abs(current_location.col - j)) {

        //             moves.push({row : i, col : j})
        //         }
        //     }
        // }
        // let index = moves.indexOf({row : current_location.row, col : current_location.col})
        // moves.splice(index);
        // console.log(moves);
        return moves;

    }
}
