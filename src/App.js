import './App.css';
import Header from './components/Header';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { createContext, useState } from 'react';

const updateContext = createContext();

function App() {
  const [apiCall,setApiCall] = useState([]);
  
  // console.log(apiCall);
   return (
    <div className="App">
      <updateContext.Provider value={{apiCall, setApiCall}}>
        <Header />
        <AddTodoForm />
        <TodoList />
      </updateContext.Provider>
    </div>
  );
}

export default App;
export {updateContext};
