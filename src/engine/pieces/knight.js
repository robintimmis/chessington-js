import Piece from './piece';
import move from './moves';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const moves = new Array();
        const current_location = board.findPiece(this)

        return move.knight_move(current_location,moves)
    }
}
