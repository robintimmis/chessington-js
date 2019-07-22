import Piece from './piece';
import move from './moves';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current_location = board.findPiece(this)
        let moves = new Array();

        moves = move.lateral_move(current_location, moves, 8, board)
        moves = move.diagonal_move(current_location,moves, 8)

        return moves

        // return move.lateral_move(current_location, move.diagonal_move(current_location,moves))

        // let new_moves = move.diagonal_move(current_location,moves);


        
    }
}
