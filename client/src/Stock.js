import React from "react";
import './Stock.css';

const Stock = ({close,volume,high,low,open}) => {
  return(
    <div className="stock-container">
    <div className="stock-row">
    {/* <div className="stock">
    <img src='' alt="crypto"/>
    <h1></h1>
    <p className="stock-symbol"></p>
    </div> */}
    <div className="stock-data">
    <p className="stock-volume">VOLUME: ${volume}</p>
    <p className="stock-volume">OPEN: ${open}</p>
    <p className="stock-volume">CLOSE: ${close}</p>
    <p className="stock-volume">HIGH: ${high}</p>
    <p className="stock-volume">LOW: ${low}</p>
    
    {/* <p className="stock-percent red">%</p>
    <p className="stock-percent green">%</p>
    <p className="stock-marketcap"></p> */}
    </div>
    </div>
    </div>
)
};

export default Stock;
