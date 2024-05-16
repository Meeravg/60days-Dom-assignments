import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
        <h1>Count value is : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
        <br/>
        <button style={{marginTop: "10px"}} onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
}

export default App;
