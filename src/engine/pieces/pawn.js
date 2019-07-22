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
        
        if (this.player === Player.WHITE) {
            let new_square = new Square(current_location.row + 1, current_location.col)
            if (board.getPiece(new_square) == null) {
                moves.push({ row: new_square.row , col: new_square.col })
                if (current_location.row === 1){
                    let new_square2 = new Square(current_location.row + 2, current_location.col)
                    if (board.getPiece(new_square2) == null) {
                        moves.push({ row: new_square2.row , col: new_square2.col })
                    }
                }
            }

        } else if (this.player === Player.BLACK) {
            let new_square = new Square(current_location.row - 1, current_location.col)
            if (board.getPiece(new_square) == null) {
                moves.push({ row: new_square.row , col: new_square.col })
                if (current_location.row === 6){
                    let new_square2 = new Square(current_location.row - 2, current_location.col)
                    if (board.getPiece(new_square2) == null) {
                        moves.push({ row: new_square2.row , col: new_square2.col })
                    }
                }  
            }
        }
        return moves;
    }
}
