import './App.css';
import Styles from './styles/style.module.css';
import Row from './row';
import {nanoid} from "nanoid";

const languages = ['JavaScript', 'Python', 'Java', 'C#', 'Php', 'Ruby', 'Python'];

function App() {
  return (
    <div className={Styles.container}>
      <h1>Welcome, click add button to increase the number of current Language's vote</h1>

      <div className={Styles.tableContainer}>
          <table className={Styles.rowsContainer}>
              <tr>
                <th>language</th>
                <th>votes</th>
                <th>add button</th>
              </tr>

              {languages.map(el => {
                  return (
                      <tr key={nanoid()}>
                          <Row language={el} />
                      </tr>
                  )
              })}
          </table>
      </div>

    </div>
  );
}

export default App;
