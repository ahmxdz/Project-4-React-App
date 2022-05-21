import './App.css';
import React from 'react'
import HomePage from '../HomePage/HomePage';
import AddClient from '../AddClient/AddClient';
import SendMoney from '../SendMoney/SendMoney';
import TransferHistory from '../TransferHistory/TransferHistory';
import About from '../About/About'
import SignIn from '../SignIn/SignIn'
import NavBar from '../../components/NavBar/NavBar';
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
          <Route exact path='/sign-in' render={() => <SignIn /> } />
      </Switch>
    </div>
  );
}

export default App;
