import React from "react";
import './index.css';

import PropTypes from 'prop-types';

const Tablero = ({ jugador1, clickCheck }) => {
    return (
        <div className='tablero'>
            <div className='caja1'>
                <div className='caja1a' onClick={clickCheck}>{jugador1}</div>
                <div className='caja1a' onClick={clickCheck}>{jugador1}</div>
                <div className='caja1a' onClick={clickCheck}>{jugador1}</div>
            </div>
            <div className='caja2'>
                <div className='caja2a' onClick={clickCheck}>{jugador1}</div>
                <div className='caja2a' onClick={clickCheck}>{jugador1}</div>
                <div className='caja2a' onClick={clickCheck}>{jugador1}</div>
            </div>
            <div className='caja3'>
                <div className='caja3a' onClick={clickCheck}>{jugador1}</div>
                <div className='caja3a' onClick={clickCheck}>{jugador1}</div>
                <div className='caja3a' onClick={clickCheck}>{jugador1}</div>
            </div>
        </div>
    );
};

Tablero.propTypes = {
    jugador1: PropTypes.string,
    clickCheck: PropTypes.func
};

export default Tablero