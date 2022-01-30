import logo from './logo.svg';
import './App.css';
import AddReview from './AddReview'
import { BrowserRouter, Redirect, Route} from 'react-router-dom';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home'
import NavBar from './components/NavBar'


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
      <NavBar account={account}/>
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
            <Home />
        </Route>

        <Route path = "/postreview" exact>
          <AddReview dormid={"61f50c990f6f0265ccc8a3e3"} dormname={"Trusler Hall"} account={account}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;