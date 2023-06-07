import Square from "../Square";
import "./index.scss";


function BoardLine({ lineNumber, squares, onClick }) {
    let squareColor = lineNumber % 2 == 0;
    const boardSquares = [];

    for (let i = 0; i < 8; i++) {
        boardSquares.push(<Square key={i} shade={squareColor ? "light-square" : "dark-square"} style={squares[(lineNumber*8) + i]?.style} onClick={() => onClick((lineNumber*8) + i)} />);
        squareColor = !squareColor;
    }

    return (
        <div className="boardLine">{boardSquares}</div>
    );
}

export default BoardLine;
