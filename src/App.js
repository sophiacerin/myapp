
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
      <BrowserRouter>
      <Routes>
        <Route path ="login" element={<Login/>}/>
        <Route path ="table" element={<Table/>}/>
        <Route path ="counter" element={<Counter/>}/>
        <Route path ="alert" element={<Alert/>}/>
        <Route path ="users" element={<Users/>}/>
        <Route path ="fun" element={<Fun/>}/>
        <Route path ="todo" element={<Todo/>}/>
        <Route path ="form" element={<Form/>}/>
        <Route path ="crud" element={<Crud/>}/>
        <Route path ="hideseek" element={<HideSeek/>}/>
        <Route path ="colorpicker" element={<ColorPicker/>}/>
        <Route path ="/" element={<Hello name ='sophia'/>}/>
        <Route path ="greetings" element={<Greetings name ='rheanna'/>}/>
        
      </Routes>
      </BrowserRouter>
     {/* <Hello name='sophia'/>
     <Hello name='rheanna'/>
     <Hello name='raaj'/> */}
     {/* <Greetings name='sophia'/>
     <Greetings name='rheanna'/> */}
     {/* <Counter/>
     <Alert/>
     <Users/>
     <Fun/>
     <Todo/>
     <Form/>
     <HideSeek/>
     <ColorPicker/> 
     <Login/>
     <Table/>
     <Crud/> */}
    </div>
  );
}

export default App;
