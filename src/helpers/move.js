import initialiseChessBoard from './boardInitialiser';


export default class Move {
    constructor() {
        this.squares = initialiseChessBoard();
        this.player = 1;
        this.sourceSelection = -1;
        this.turn = "white";
    }

    handleClick(i) {
        const squares = this.squares.slice();

        if (this.sourceSelection === -1) {
            if (!squares[i] || squares[i].player !== this.player) {
                if (squares[i]) {
                    const { backgroundColor, ...styleRest } = squares[i].style;
                    squares[i].style = styleRest;
                }
            } else {
                squares[i].style = { ...squares[i].style, backgroundColor: "RGB(111,143,114)" };
                this.sourceSelection = i;
            }
        } else if (this.sourceSelection > -1) {
            const { backgroundColor, ...styleRest } = squares[this.sourceSelection].style;
            squares[this.sourceSelection].style = styleRest;

            if (squares[i] && squares[i].player === this.player) {
                this.sourceSelection = -1;
            } else {
                const squares = this.squares.slice();
                const isDestEnemyOccupied = squares[i] ? true : false;
                const isMovePossible = squares[this.sourceSelection].isMovePossible(this.sourceSelection, i, isDestEnemyOccupied);
                const srcToDestPath = squares[this.sourceSelection].getSrcToDestPath(this.sourceSelection, i);
                const isMoveLegal = this.isMoveLegal(srcToDestPath);

                if (isMovePossible && isMoveLegal) {
                    squares[i] = squares[this.sourceSelection];
                    squares[this.sourceSelection] = null;

                    let player = this.player === 1 ? 2 : 1;
                    let turn = this.turn === 'white' ? 'black' : 'white';

                    this.sourceSelection = -1;
                    this.squares = squares;
                    this.player = player;
                    this.turn = turn;
                } else {
                    this.sourceSelection = -1;
                }
            }
        }

        return { squares: this.squares, turn: this.turn };
    }

    isMoveLegal(srcToDestPath) {
        let isLegal = true;

        for (let i = 0; i < srcToDestPath.length; i++) {
            if (this.squares[srcToDestPath[i]] !== null) {
                isLegal = false;
            }
        }

        return isLegal;
    }
}