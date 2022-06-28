import { useState } from 'react'

function Button({ handleClick, text }) {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

// function DisplayStat({ text, value }) {
//   return (
//     <div>
//       {text} {value}
//     </div>
//   )
// }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleGoodClick() {
    setGood(good + 1);
  }

  function handleBadClick() {
    setBad(bad + 1);
  }

  function handleNeutralClick() {
    setNeutral(neutral + 1);
  }

  function getAverage(g, n, b) {
    let total = g + n + b;
    return total === 0 ? 0 : (g - b) / total;
  }

  function getPositive(g, n, b) {
    let total = g + n + b;
    return g !== 0 ? (g / total) * 100 + ' %' : 0 + ' %';
  }

  function AllStats() {
    if (good + neutral + bad !== 0) {
      return (
        <table>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{bad + good + neutral}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{getAverage(good, neutral, bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{getPositive(good, neutral, bad)}</td>
          </tr>
        </table>
      )
    } else {
      return (
        <div>
          No feedback given
        </div>
      )
    }

  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <AllStats />
    </div>
  )
}

export default App
