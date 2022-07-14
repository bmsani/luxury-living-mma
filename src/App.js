import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import Login from '../src/Pages/Register/Login/Login'
import Dashboard from '../src/Pages/Dashboard/Dashboard'
import PaymentGetway from './Pages/Dashboard/PaymentGetway/PaymentGetway';
import Review from './Pages/Dashboard/Review/Review';
import OrderList from './Pages/Dashboard/OrderList/OrderList';
import AddService from './Pages/Dashboard/AddService/AddService';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<PaymentGetway></PaymentGetway>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='orderList' element={<OrderList></OrderList>}></Route>
          <Route path='addService' element={<AddService></AddService>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
