import { useState } from "react";

const initialGameBoard = [
    [ null, null, null],
    [ null, null, null],
    [ null, null, null]
]

export default function GameBoard (){
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectQuare (rowIndex, colIndex){
        setGameBoard((prevGameBoard) =>{
            const updateBoard =[...prevGameBoard.map(innerArray => [...innerArray])];
            updateBoard [rowIndex] [colIndex] = 'X';
            return updateBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                <ol>
                    {row.map((playerSimbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => handleSelectQuare(rowIndex, colIndex)}>{playerSimbol}</button>
                        </li>))}
                </ol>
            </li>))}
        </ol>
    );
}