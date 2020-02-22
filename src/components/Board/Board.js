import React, { useState, useEffect } from 'react';
import Tile from './Tile';

const BOARD_SIZE = 3;

const Board = () => {
    const [tileValues, setTileValues] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const players = ['O', 'X'];
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);
    const [showReset, setShowReset] = useState(false);

    useEffect(() => {
        let isEmpty = false;
        for (let i = 0; i < BOARD_SIZE; i += 1) {
            for (let j = 0; j < BOARD_SIZE; j += 1) {
                if (tileValues[i][j] === '') {
                    isEmpty = true;
                    break;
                }
            }

            if (isEmpty === true) break;
        }

        // game finished
        if (isEmpty === false) {
            setShowReset(true);
        }
    }, [tileValues]);

    const onMove = cb => {
        if (cb) {
            cb(currentPlayer, [tileValues, setTileValues]);
        }

        if (currentPlayer === players[0]) {
            setCurrentPlayer(players[1]);
            return;
        }

        setCurrentPlayer(players[0]);
    };

    const onClickResetBoard = () => {
        setTileValues([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
        setShowReset(false);
        setCurrentPlayer(players[0]);
    };

    return (
        <div className="container">
            <div style={{fontFamily: "Times New Roman", marginTop: "13%"}} className="row">
                {!showReset
                    ?
                        <h5 style={{color: "rgb(100, 100, 100)"}}>
                            Current player is&nbsp;
                            <span style={{color: currentPlayer === players[1] ? "green" : "blue",}}>
                                {currentPlayer}
                            </span>
                        </h5>
                    :
                        <h5>
                            <b>Game done!</b>
                        </h5>
                }
            </div>

            <div className="row">
                {
                    ([...Array(BOARD_SIZE).keys()].map(h =>
                        <div key={h}>
                            {
                                ([...Array(BOARD_SIZE).keys()].map(w =>
                                    <Tile
                                        key={w}
                                        x={w}
                                        y={h}
                                        currentValue={tileValues[w][h]}
                                        currentPlayer={currentPlayer}
                                        players={players}
                                        onMove={onMove}
                                    />
                                ))
                            }
                            <br />
                        </div>
                    ))
                }
            </div>

            {showReset &&
                <div className="row">
                    <button className="btn" onClick={onClickResetBoard}>
                        Reset board
                    </button>
                </div>
            }
        </div>
    );
};

export default Board;
