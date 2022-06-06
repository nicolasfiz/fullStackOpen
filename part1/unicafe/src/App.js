import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = (props) => (
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
)

const Statistics = (props) => {
  const all = props.good+props.neutral+props.bad;
  const av = (props.good-props.bad)/all;
  const pos = props.good/all*100;
  if(all === 0){
    return (
      <>
      <p>There isn't feedback</p>
      </>
    )
  }
  return(
  <table>
    <thead>
      <tr><td><h1>Statistics</h1></td></tr>
    </thead>
    <tbody>
    <Statistic value={props.good} text="Good"/>
    <Statistic value={props.neutral} text="Neutral"/>
    <Statistic value={props.bad} text="Bad"/>
    <Statistic value={all} text="All"/>
    <Statistic value={av} text="Average"/>
    <Statistic value={pos+'%'} text="Positive"/>
    </tbody>
  </table>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sumar = (letra) => {
    switch(letra){
      case('g'): setGood(good+1); break;
      case('n'): setNeutral(neutral+1); break;
      default: setBad(bad+1); break;
    }
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => sumar('g')} text="good"/>
      <Button handleClick={() => sumar('n')} text="neutral"/>
      <Button handleClick={() => sumar('b')} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App