import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(Response => 
    Response.json())
    .then((json) => console.log(json))
  }, [])
  return (
    <div className="App">
      <h1>The Coins</h1>
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default App;
