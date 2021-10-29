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
import Login from './Components/Login/Login';
import Authprovider from './Components/AuthProvider/Authprovider';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
          <PrivateRoute path='/allOrders'></PrivateRoute>
          <PrivateRoute path='/newSite'></PrivateRoute>
          <PrivateRoute path='/myOrder'></PrivateRoute>
          <Route path='/login'><Login /></Route>
          <Route path='/register'><Register></Register></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;