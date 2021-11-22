import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <NavLink className="navbar-brand" to="/">
//           MongoDB
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
 
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/create">
//                 Create Record
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <header className="header">
    <nav className="navbar navbar-expand-lg fixed-top py-3">

      <div className="container">
      <NavLink className="navbar-brand text-uppercase font-weight-bold" to="/">
          FeedBack
        </NavLink>
        {/* <a href="#" className="navbar-brand text-uppercase font-weight-bold">FeedBack</a> */}
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars" /></button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Equipe</a></li>
            <li className="nav-item"><NavLink href="#" className="nav-link text-uppercase font-weight-bold" to="/create">Developpement durable</NavLink></li>
            <li className="nav-item"><NavLink href="#" className="nav-link text-uppercase font-weight-bold" to="/contact">Greta's 06</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    <div style={{background: 'url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg)'}} className="jumbotron bg-cover text-white">
      <div className="container py-5 text-center">
        <h1 className="display-4 font-weight-bold">FeedBack</h1>
        <p className="font-italic mb-0">Compare, reçois les meilleurs avis, but don't stole my dream </p>
        <br />
        <a href="#" role="button" className="btn btn-primary px-5">See All Features</a>
      </div>
    </div>
    </header>
  );
};
 
export default Navbar;