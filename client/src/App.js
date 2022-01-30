import logo from './logo.svg';
import './App.css';
import AddReview from './AddReview'
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

                <Route path="/home" exact>
                    
                </Route>

                <Route path = "/postreview" exact>
                  <AddReview dormid={123} dormname={"Trusler Hall"}/>
                </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
