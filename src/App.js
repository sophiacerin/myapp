
import './App.css';
import Hello from './Hello';
import Greetings from './Greetings';
import Counter from './Counter';
import Alert from './Alert';
import Users from './Users';
import Fun from './fun';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
     <Hello name='sophia'/>
     <Hello name='rheanna'/>
     <Hello name='raaj'/>
     <Greetings name='sophia'/>
     <Greetings name='rheanna'/>
     <Counter/>
     <Alert/>
     <Users/>
     <Fun/>
     <Todo/>
    </div>
  );
}

export default App;
