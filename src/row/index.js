import {useState, useCallback} from 'react';
export default function Row({language}){
  const [numberOfVotes, setNumberOfVotes] = useState(0);

  const addHandler = useCallback((type) => {
    if(type === 'increase') {
      setNumberOfVotes(prevState => prevState + 1)
    } else if(type === 'decrease') {
      if(numberOfVotes !== 0) {
        setNumberOfVotes(prevState => prevState - 1);
      }
    } else {
      setNumberOfVotes(0);
    }
  },[numberOfVotes]);
  return (
    <>
      <td>{language}</td>
      <td>{numberOfVotes}</td>
      <td>
        <button onClick={() => addHandler('increase')}>Add</button>
        <button onClick={() => addHandler('decrease')}>down</button>
        <button onClick={() => addHandler('reset')}>reset</button>
      </td>
    </>
  )
}