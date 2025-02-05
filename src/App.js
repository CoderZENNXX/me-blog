import NavBar from "./NavBar"
import Home from "./Home"
import CreateBlog from './CreateBlog';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import BlogsDetail from "./BlogsDetail";
import Page404 from "./Page404";
import UpdateBlog from "./UpdateBlog";
import './style.css';

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
            <Route path="/blogs/:id/edit">
              <UpdateBlog></UpdateBlog>
            </Route>
            <Route path="/blogs/:id">
              <BlogsDetail></BlogsDetail>
            </Route>
            <Route path="*">
              <Page404></Page404>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
