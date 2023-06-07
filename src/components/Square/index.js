import React from 'react';
import './index.scss';

export default function Square({ shade, onClick, style }) {
    return (
        <button className={"square " + shade}
            onClick={onClick}
            style={style}>
        </button>
    );
}