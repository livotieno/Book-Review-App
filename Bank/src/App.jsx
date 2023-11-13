//import About from "./Components/about/About";
import Contacts from "./Components/contacts/Contacts";
import Services from "./Components/services/Services";
import Home from "./Components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/nav/Nav"
function App() {
  return (
    <>
   <Nav/>
      <Router>
      
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
