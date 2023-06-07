
import React, { useEffect, useState } from 'react';
import Board from "../../components/Board";
import Move from '../../helpers/move';

import "./index.scss";
import "./nullstyle.scss";


function App() {
    const [move, setMove] = useState(null);
    const [data, setData] = useState({});
    useEffect(() => {
        const thisMove = new Move();
        setMove(thisMove);
        setData({ turn: thisMove.turn, squares: thisMove.squares });
    }, [setMove, setData]);

    return (
        move &&
        <>
            <h1>Turn: {data.turn}</h1>
            <Board
                squares={data.squares}
                onClick={(i) => setData(move.handleClick(i))}
            />
        </>
    );
}

export default App;
