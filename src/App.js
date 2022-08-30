import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import PageNotFound from './pages/404/PageNotFound'
import NavBar from './components/pure/NavBar';
import HomePage from './pages/home/HomePage'
function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/tasks' element={<TasksPage />} />
          <Route exact path='/tasks/:id' element={<TaskDetailPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
