import Piece from './piece';
import move from './moves';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current_location = board.findPiece(this)
        let moves = new Array();

        moves = move.lateral_move(current_location, moves, 2, board)
        moves = move.diagonal_move(current_location,moves, 2)

        return moves

    }
}
