import {useState, useCallback} from 'react';
export default function Row({language}){
  const [numberOfVotes, setNumberOfVotes] = useState(0);

  const addHandler = useCallback(() => {
    setNumberOfVotes(prevState => prevState + 1)
  },[])
  return (
    <>
      <td>{language}</td>
      <td>{numberOfVotes}</td>
      <td>
        <button onClick={addHandler}>Add</button>
      </td>
    </>
  )
}