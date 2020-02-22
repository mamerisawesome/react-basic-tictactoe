import React, { useState } from 'react';

const Tile = ({
    x,
    y,
    currentValue,
    currentPlayer,
    players,
    onMove
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onClickTile = () => {
        if (currentValue === '') {
            onMove((playerName, [tileValues, setTileValues]) => {
                const tempValues = tileValues.slice(0);
                tempValues[x][y] = playerName;
                setTileValues(tempValues);
            });
        }
    };

    const onTileHover = () => {
        setIsHovered(true);
    };

    const onTileOut = () => {
        setIsHovered(false);
    };

    return (
        <>
            <button style={{
                color: !isHovered  ? (currentValue === players[1] ? "green" : "blue") : currentValue === "" ? "white" : "black",
                width: "100px",
                height: "100px",
                fontWeight: "bold",
                borderRadius: "10px",
                margin: "10px",
                backgroundColor: isHovered && currentValue === "" ? (currentPlayer === players[1] ? "green" : "blue") : "white",
            }} className="tile btn" onMouseEnter={onTileHover} onMouseOut={onTileOut} onClick={onClickTile}>
                {(isHovered && currentValue === "") ? currentPlayer : currentValue}
            </button>
        </>
    );
};

export default Tile;
