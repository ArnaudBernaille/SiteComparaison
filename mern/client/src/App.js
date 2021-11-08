import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom'

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Container from "./components/container";
import "./index.css"
import Reactionlike from "./components/reaction";
// import Edit from "./components/edit";
// import Create from "./components/create";
// import RecordList from "./components/recordList";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Route exact path="/">
//         <RecordList />
//       </Route>
//       <Route path="/edit/:id" component={Edit} />
//       <Route path="/create">
//         <Create />
//       </Route>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container/>
      <header className="App-header">
        <Reactionlike/>
        <p> EDit some text here again
        </p>
      </header>
    </div>
  )
}

export default App;