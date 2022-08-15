import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import TasksPage from './pages/tasks/TasksPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage/>}/>
        <Route exact path='/dashboard' element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
