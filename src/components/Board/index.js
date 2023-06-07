import BoardLine from "../BoardLine";

import "./index.scss";


function Board({ squares, onClick }) {
    let boardLines = [];

    for (let i = 0; i < 8; i++) {
        boardLines.push(<BoardLine key={i} lineNumber={i} squares={squares} onClick={onClick} />);
    }

    return (
        <div className="board">{boardLines}</div>
    );
}

export default Board;
