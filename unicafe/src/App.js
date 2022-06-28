import { useState } from 'react'

function Button({handleClick, text}) {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

function DisplayStat({text, value}) {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleGoodClick() {
    setGood(good + 1);
  }

  function handleBadClick() {
    setBad(bad  + 1);
  }

  function handleNeutralClick() {
    setNeutral(neutral + 1);
  }

  function getAverage(g, n, b) {
    let total = g + n + b;
    return total === 0? 0: (g-b)/total;
  }

  function getPositive(g, n, b) {
    let total = g + n + b;
    return g !== 0?(g/total) * 100 + ' %': 0+' %';
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <DisplayStat text='good' value={good} />
      <DisplayStat text='neutral' value={neutral} />
      <DisplayStat text='bad' value={bad} />
      <DisplayStat text='all' value={bad + good + neutral} />
      <DisplayStat text='average' value={getAverage(good, neutral, bad)} />
      <DisplayStat text='positive' value={getPositive(good, neutral, bad)} />
    </div>
  )
}

export default App
