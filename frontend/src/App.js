import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import CartScreen from "./components/CartScreen";

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setsideToggle] = useState(false);

  return (
    <Router>
        <Navbar click={() => setsideToggle(true)}/>
        <SideDrawer show={sideToggle} click={() => setsideToggle(false)}/>
        <Backdrop show={sideToggle} click={() => setsideToggle(false)}/>
        <main>
          <Switch> 
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/product/:id" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
          </Switch>
        </main>
    </Router>
  );
}

export default App;
