import Piece from './piece';
import move from './moves';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const moves = new Array();
        const current_location = board.findPiece(this)

        return move.king_move(current_location,moves)
    }
}
