import Piece from './piece';
import move from './moves';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current_location = board.findPiece(this)

        const moves = move.lateral_move(current_location, 8, board)
        return moves.concat(move.diagonal_move(current_location, 8))
    }
}
