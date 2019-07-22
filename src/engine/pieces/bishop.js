import Piece from './piece';
import move from './moves';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current_location = board.findPiece(this)
        let moves = new Array();

        return move.diagonal_move(current_location, moves);


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
