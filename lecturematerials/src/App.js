import { useState } from "react";

function Display(props) {
  return (
    <h1>{props.counter}</h1>
  );
}

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {setCounter(counter + 1)}
  function decrementCounter() {setCounter(counter - 1)}
  function resetCounter() {setCounter(0)}

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={incrementCounter} text="Add to Counter" />
      <Button onClick={resetCounter} text="Reset Counter" />
      <Button onClick={decrementCounter} text="Subtract from Counter" />
    </div>
  );
}

export default App;
