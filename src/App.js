import './App.css';
import TaskList from './components/container/TaskList';
import Registerform from './components/pure/forms/Registerform';
import TaskFormik from './components/pure/forms/TaskFormik';

function App() {
  return (
    <div className="App">
      {/* <TaskList /> */}
      {/* <Registerform /> */}
      <TaskFormik/>
    </div>
  );
}

export default App;
