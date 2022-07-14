import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Login from '../src/Pages/Register/Login/Login'
import Dashboard from '../src/Pages/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
