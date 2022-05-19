import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [inverted, setInverted] = useState(false);

  const onChange = (event) =>{
    setIndex(event.target.value);
  }
  const _onChange = (event) => {
    setAmount(event.target.value);
  }
  const reset = () => setAmount("");
  const onInverted = () => {
    setInverted(current => !current);
    reset();
  }
  const coin = coins[index]
  const coin_price = coin?.quotes.USD.price

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <h1>The Coins!{loading? "" : `(${coins.length})` }</h1>
      {loading? (
        <strong>loading...</strong>
      ) : (
        <select value={index} onChange={onChange}>
          {coins.map((coin, idx) => (
            <option value={idx} key={idx}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <input
          type="number"
          placeholder="price"
          value={inverted? amount * coin_price : amount}
          onChange={_onChange}
          disabled={inverted}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder={coin?.name}
          value={inverted? amount : amount/coin_price}
          onChange={_onChange}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInverted}>{inverted? "Turn back" : "invert"}</button>
    </React.Fragment>
  );
}

export default App;
