import "./TicTacCSS/ticContainer.css"
import Square from './Square'

const Board = ({ squares, click }) => {
    return (
        <div className='box'>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => click(i)} />
                ))
            }
        </div>
    )
}


export default Board