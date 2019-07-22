import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board) {
        const current_location = board.findPiece(this)
        const moves = new Array()
        const startingRow = this.player === Player.WHITE ? 1 : 6;   
        const direction = this.player === Player.WHITE ? 1 : -1;

        let new_square = new Square(current_location.row + direction, current_location.col)
        if (board.getPiece(new_square) == null) {
            moves.push({ row: new_square.row , col: new_square.col })
            if (current_location.row === startingRow){
                let new_square2 = new Square(current_location.row + 2*direction, current_location.col)
                if (board.getPiece(new_square2) == null) {
                    moves.push({ row: new_square2.row , col: new_square2.col })
                }
            }
        }
        return moves;
    }
}
