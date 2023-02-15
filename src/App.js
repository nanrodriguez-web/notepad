import "./App.css";

import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home.";

function App() {
   const unsetUser = (user) => {
      localStorage.clear();
   };
   return (
      <>
         <Router>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/login" element={<Login />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;
