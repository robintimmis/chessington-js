import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board) {
        const current_location = board.findPiece(this)
        if (this.player === Player.WHITE) {
            const moves = new Array({ row: current_location.row + 1, col: current_location.col });
            if (current_location.row === 1){
                moves.push({row: current_location.row + 2, col: current_location.col } );
            }
            return moves;
        } else if (this.player === Player.BLACK) {
            const moves = new Array({ row: current_location.row - 1, col: current_location.col });
            if (current_location.row === 6){
                moves.push({row: current_location.row - 2, col: current_location.col});
            }
            return moves;
        }
    }
}
