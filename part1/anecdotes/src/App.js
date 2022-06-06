import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.value}>{props.text}</button>
)

const ShowMostVotes = (props) => {
  const cond = Math.max(...props.value);
  if(cond>0){
    return(
      <div>
        <h1>Anecdote with most votes</h1> 
        <p>{anecdotes[props.value.indexOf(cond)]}</p>
      </div>
    ) 
  }else{
    return(
      <div>
        <p>There aren't votes yet</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
];

const App = () => {
  
  const [selected, setSelected] = useState({
    cont: 0,
    votes: Array(anecdotes.length).fill(0)
  })
  // parseInt(Math.random()*selected.cont%anecdotes.length);
  const changeSelection = () => {
    const newSelected = {
      cont: parseInt(""+Math.random()*(anecdotes.length)),
      votes: selected.votes
    }
    setSelected(newSelected);
  }
  const giveVote = () => {
    let aux = [...selected.votes];
    aux[selected.cont]++;
    const newSelected = {
      cont: selected.cont,
      votes: aux
    }
    setSelected(newSelected);
  }

  return (
    <>
      <div>
        <h1>Anecdotes of the day</h1>
        {console.log(selected.cont)}
        <p>{anecdotes[selected.cont]}</p>
        <Button value={() => changeSelection()} text="next"/>
        <Button value={() => giveVote()} text="vote"/> 
      </div>
      <div>
        <ShowMostVotes value={[...selected.votes]}/>
      </div>
    </>
  )
}

export default App