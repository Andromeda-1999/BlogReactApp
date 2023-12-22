import Navbar from './NavBar';
import Home from './Home';
//use browser router with the name of Router
//Router steps in instead of the server to show multiple pages which makes the site faster
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {

  // dealing with dynamic variable
  // const title = 'welcome';
  // const likes = 50;
  // const person = { name: "", age: 60 }
  // const link = "http://www.google.com";
  return (
    //wrap all the content of the site in the router tag inorder to use route component
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* this is where the page content should go 
          switch makes sure only one route shows at any one time 
          when a route is given react will go top to bottom inside the switch component until the  route is matched   */}
          <Switch>
            {/* create a route for each page we have using the Route component 
            path property is the route the path is called after the route of the website e.g http://localhost:3000/
            where local host is the root and the forward slash is the homepage route
            exact keyword means only match this when it is the exact path of the component*/}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* /blogs/123 where 123 is route parameter which keeps on changing according to the id
            so the changing part on the route is a route parameter
            to write a route parameter :id or :xyz */}
            <Route path="/blogs/:id">
              {/* to extract the route parameter and pass in BlogDetails to show the specific blog details */}
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <h1>{title}</h1>
        <p>Liked{likes} times</p> */}
        </div>
        {/* <p>{10}</p>
      <p>{"hello,ninja turtle"}</p>
      <p>[1,2,3,4]</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Google Size</a> */}
      </div>
    </Router>
  );
}

export default App;
