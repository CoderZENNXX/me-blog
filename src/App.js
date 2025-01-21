import NavBar from "./NavBar"
import Home from "./Home"
import CreateBlog from './CreateBlog';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/createBlog">
              <CreateBlog></CreateBlog>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
