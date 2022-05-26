import './App.css';
import React from 'react'
import HomePage from '../HomePage/HomePage';
import AddClient from '../AddClient/AddClient';
import SendMoney from '../SendMoney/SendMoney';
import TransferHistory from '../TransferHistory/TransferHistory';
import About from '../About/About'
import SignIn from '../SignIn/SignIn'
import SignUpPage from '../SignUpPage/SignUpPage'
import NavBar from '../../components/NavBar/NavBar';
import SendMoneyForm from '../../components/SendMoneyForm/SendMoneyForm';
import {Switch, Route} from 'react-router-dom'



function App() {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={()=> <HomePage/>} />
          <Route exact path='/add-client' render={({history}) => <AddClient history={history}/> } />
          <Route exact path='/send-money' render={() => <SendMoney /> } />
          <Route exact path='/send-money/:id' component= {SendMoneyForm} />
          <Route exact path='/transfer-history' render={() => <TransferHistory /> } />
          <Route exact path='/about' render={() => <About /> } />
          <Route exact path='/sign-in' render={() => <SignIn /> } />
          <Route exact path='/sign-up' render={() => <SignUpPage />} />
        </Switch>
      
    </div>
  );
}

export default App;
