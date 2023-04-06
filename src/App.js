
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div className='w-screen h-screen '>
      <div>
        <Counter value={50}/>
      </div>
    </div>
  );
}

export default App;
