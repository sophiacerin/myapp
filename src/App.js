
import './App.css';
import Hello from './Hello';
import Greetings from './Greetings';
import Counter from './Counter';
import Alert from './Alert';
import Users from './Users';
import Fun from './fun';
import Todo from './Todo';
import Form from './Form';
import HideSeek from './HideSeek';
import ColorPicker from './ColorPicker';

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
     <Form/>
     <HideSeek/>
     <ColorPicker/>
    </div>
  );
}

export default App;
