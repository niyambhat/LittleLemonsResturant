import './App.scss'
import { BrowserRouter as Router, Switch, Route,Routes, NavLink } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Nav from './Components/Layout/Nav';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Menu from './Components/Pages/Menu';
import Reservations from './Components/Pages/Reservations';
import OrderOnline from './Components/Pages/OrderOnline';
import Login from './Components/Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Pages/Admin';


function App() {
  const routes =[
    {
      path: '/',
      Component: Home,
      exact: true,
    },
    {
      path:'/about',
      Component:About
    },
    {
      path: '/menu',
      Component: Menu,
    },
    {
      path: '/reservations',
      Component: Reservations,
    },
    {
      path: '/order-online',
      Component: OrderOnline,
    },
    {
      path: '/login',
      Component: Login,
    },
    {
      path: '/admin',
      Component: Admin,
    },
  ];
  
  return (
    <Router>
    <div className="App">
      <Header/>
        <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} element={<route.Component />} />
          ))}
          </Routes>
        </main>  
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
