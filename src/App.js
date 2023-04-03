import { useState } from 'react';
import './App.css';
import Tablero from './components/tablero';

function App() {

  let x = [["1.0", "1.1", "1.2"], ["2.0", "2.1", "2.2"], ["3.0", "3.1", "3.2"]];
  let y = [["1.0", "1.1", "1.2"], ["2.0", "2.1", "2.2"], ["3.0", "3.1", "3.2"]];
  console.log("x", x[0][1] === y[0][1])
  console.log("y", y)

  const [jugador1, setJugador1] = useState("");

  const clickCheck = () => {
    if(jugador1 === "") {
      setJugador1("X")
    }
    
    if(jugador1 === "X") {
      setJugador1("0")
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div>
          <h1>Juego de la vieja</h1>
          <Tablero clickCheck={clickCheck} jugador1={jugador1}/>
        </div>
      </body>
    </div>
  );
}

export default App;
