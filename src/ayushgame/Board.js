import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};
const style1={
    fontSize:'36px',
    color:'#000000',
    fontFamily: "'Rock Salt', cursive",
    paddingLeft:'25%',
    
    
};

const Board = ({ squares, onClick }) => (
    <div >
        <h1 style={style1}>Tic_Tac_Toe Game By Ayush.</h1>
    <div style={style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
    </div>
)

export default Board;