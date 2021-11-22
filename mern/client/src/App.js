
import React from "react";

import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";


import "./index.css";
import { Routes } from "react-router";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/contact"></Route>
        {/* <Route path="/create" component={Create}>
          <Create />
        </Route> */}
      </Routes>
      {/* <Route exact path="/">
        <RecordList />
      </Route> 
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
        </Route> */}
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Container/>
//       <header className="App-header">
//         <Reactionlike/>
//         <p> EDit some text here again
//         </p>
//       </header>
//       {/* <Router>
//         <Route path="/create" component={CreateTodo} />
//       </Router>   */}
//     </div>

//   )
// }


// class App extends Component {
//   render () {
//     return (
//       // <Router>
//         <div className="App">
//           <Navbar/>
//           <Container/>
//           <header className="App-header">
//             <Reactionlike/>
//             <p> EDit some text here again and again</p>
//           </header>
//           {/* <li className="navbar-item">
//                   <Link to="/create" className="nav-link">Create Todo</Link>
//           </li> */}
//           {/* <Route path="/create" component={CreateTodo} /> */}
//         </div>
//       // </Router>
//     )
//   }
// }



export default App;