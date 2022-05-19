import './App.css';
import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import AddClient from './pages/AddClient/AddClient';
import SendMoney from './pages/SendMoney/SendMoney';
import TransferHistory from './pages/TransferHistory/TransferHistory';
import About from './pages/About/About'
import NavBar from '../src/components/NavBar/NavBar';
import {Switch, Route} from 'react-router-dom'



function App() {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={()=> <HomePage/>} />
          <Route exact path='/add-client' render={() => <AddClient /> } />
          <Route exact path='/send-money' render={() => <SendMoney /> } />
          <Route exact path='/transfer-history' render={() => <TransferHistory /> } />
          <Route exact path='/about' render={() => <About /> } />
      </Switch>
    </div>
  );
}

export default App;
