import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Authprovider from './Components/AuthProvider/Authprovider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import AllOrder from './Components/AllOrders/AllOrder';
import NewSite from './Components/NewSite/NewSite';
import Nopage from './Components/Nopage/Nopage';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Authprovider className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/home'><Home /></Route>
          <PrivateRoute path='/allOrders'><AllOrder></AllOrder></PrivateRoute>
          <PrivateRoute path='/newSite'><NewSite></NewSite></PrivateRoute>
          <PrivateRoute path='/myOrder'><MyOrders></MyOrders></PrivateRoute>
          <PrivateRoute path='/sites/:id'><Details></Details></PrivateRoute>
          <Route path='/login'><Login></Login></Route>
          <Route path='/register'><Register></Register></Route>
          <Route path='*'><Nopage></Nopage></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;