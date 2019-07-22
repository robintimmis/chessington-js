import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const current_location = board.findPiece(this)
        let moves = new Array();
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
    }
}
