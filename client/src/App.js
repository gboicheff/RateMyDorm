import logo from './logo.svg';
import './App.css';
import Home from './Home'
import { BrowserRouter, Redirect, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Route path="/" exact>
                    
                </Route>
                <Route path="/login" exact>

                </Route>
                <Route path="/account" exact>
                    
                </Route>
                <Route path="/signup" exact>
                    
                </Route>

                <Route path="/home">
                    <Home />
                </Route>

                <Route path = "/postreview" exact>
                </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;