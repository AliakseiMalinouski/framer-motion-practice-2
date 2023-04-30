
import './App.css';
import { Collapsible } from './components/Collaplsible';
import { Filter } from './components/Filter';
import {data} from './data/data';

function App() {
  return (
    <div className="App">
      <Filter data={data}/>
    </div>
  );
}

export default App;
