import { useState } from "react";

function Button(props) {
  console.log("props value is ", props)
  const {handleClick, text} = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

function History({allClicks}) {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  } else {
    return (
      <div>
        Button press history: {allClicks.join(' ')}
      </div>
    )
  }
}
function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='Left' />
      <Button handleClick={handleRightClick} text='Right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
