import React from "react";
import './Stock.css';

const Stock = ({close,volume,high,low,open}) => {
  return(
    <>
    <div className="stock-container">
    <div className="stock-row">
    <div className="stock-data">
    <p className="stock-volume">VOLUME ($):</p>
    <p className="stock-volume">OPEN ($): </p>
    <p className="stock-volume">CLOSE ($): </p>
    <p className="stock-volume">HIGH ($): </p>
    <p className="stock-volume">LOW ($): </p>
    </div>
    </div>
    </div>
    <div className="stock-container">
    <div className="stock-row">
    <div className="stock-data">
    <p className="stock-volume">{volume}</p>
    <p className="stock-volume">{open}</p>
    <p className="stock-volume">{close}</p>
    <p className="stock-volume">{high}</p>
    <p className="stock-volume">{low}</p>
    </div>
    </div>
    </div>
    </>
)
};

export default Stock;
