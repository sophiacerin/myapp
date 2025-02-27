
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Crud from './Crud';
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
import Login from './Login';
import Table from './Table';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="Table" element={<Table/>}/>

      </Routes>
      </BrowserRouter> */}
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
     <Login/>
     <Table/>
     <Crud/>
    </div>
  );
}

export default App;
