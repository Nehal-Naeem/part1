import './App.css';

const Hello = (props) => {
  console.log('Hello from component -> Hello')
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  console.log('Hello from component -> App')
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name="George" age={26 + 10} />
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App;
