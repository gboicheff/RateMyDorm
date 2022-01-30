import logo from './logo.svg';
import './App.css';
import AddReview from './AddReview'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Account from "./pages/Account"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home'
import DormInfo from './DormInfo';


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
      <Routes>
                <Route path="/" exact>
                    
                </Route>
                <Route path="/login" element={
                    <Login account = {account}/>}>
                </Route>
                <Route path="/account" element={
                      <Account account = {account}/>}>
                </Route>
                <Route path="/signup" element={
                    <Signup account = {account}/>}>
                </Route>

                <Route path="/home" element={
                    <Home />}>
                </Route>

                <Route path="/DormInfo" element={
                   <DormInfo />}>
                   </Route>


                <Route path = "/postreview" element={
                  <AddReview dormid={123} dormname={"Trusler Hall"}/>}>
                </Route>
                </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;