import React from 'react';

const style = {
    background: '#fff9c0',
    boxShadow:" 5px 5px 10px #dbcf5b , -5px -5px 10px #ffffff",
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;