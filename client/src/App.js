import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route} from 'react-router-dom';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [account, setAccount] = useState(null)

  useEffect(() =>{
      axios.get('/api/auth/account').then(res => {
          setAccount(res.data.user)
      }).catch(error => {
          console.log(error)
      })
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
                <Route path="/" exact>
                    
                </Route>
                <Route path="/login" exact>
                    <Login account = {account}/>
                </Route>
                <Route path="/account" exact>
                      <Account account = {account}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup account = {account}/>
                </Route>

                <Route path="/home" exact>
                    
                </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
