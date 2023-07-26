import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Stock from './Stock.js'
import { Alert } from './Alert';

function App() {
  const [flag,setFlag]=useState(1);
	const [stock,setStock]=useState({
    close:'',
    volume:'',
    high:'',
    low:'',
    open:''
  });
  const [data,setData]=useState({
    stock:'',
    date:''
  });

  

	function handleChange(e) {
      setData({
        ...data,[e.target.name]:e.target.value
      })

	  }
    const handleClick = async (e) => 
    { try { 
      e.preventDefault();
      const url = 'http://localhost:5000/api/fetchStockData'
      const res = await axios.post(url, data); 
      console.log(res.status);
      console.log(typeof(res.status));
      if(res.status===200){
        setFlag(1);
      }
      console.log(res.data.o); 
      setStock({
        close:res.data.c,
        volume:res.data.v,
        high:res.data.h,
        low:res.data.l,
        open:res.data.o
      })
    } 
      catch (error) { 
        console.log("ERROR AA GAYA");
        setFlag(0);
        console.log(error); 
      } }; 
    
	return (
	<div className="app">
    <div className="stock-app">
      <div className="stock-search">
      <h1 className="stock-text">Search a Stock</h1>
      <form>
      <input type="text" placeholder="Enter Symbol" name='stock'
      className="stock-input"
      onChange={handleChange} />
      <input type="date" placeholder="Enter date" name='date'
      className="stock-input" 
      onChange={handleChange} />
      <button className='stock-input' onClick={handleClick}>Submit</button>
      </form>
      </div>
      {flag? 
        <Stock
        name={stock.name} 
        open={stock.open}
        close={stock.close}
        volume={stock.volume}
        high={stock.high}
        low={stock.low} />:
        <div className="">
        <Alert />
        </div>
}
</div>
    </div>
	);
}

export default App;