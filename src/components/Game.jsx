import React, { useState } from 'react'
import "../TicTacCSS/ticContainer.css"
import Board from '../Board'
import { calculateWinner } from '../Winner'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xMove, setХMove] = useState(true)
    const winner = calculateWinner(board)
    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner) return alert('The game is over. Winner: ' + winner);
        if (winner || boardCopy[index]) return
        boardCopy[index] = xMove ? 'x' : 'o'
        setBoard(boardCopy)
        setХMove(!xMove)
    }

    const startNewGame = () => {
        return (
            <button className='startBtn' onClick={() => setBoard(Array(9).fill(null))}>New game</button>
        )
    }

    return (
        <div className='container'>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
        </div>
    )
}


export default Game
