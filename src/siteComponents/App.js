import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Layout from "../Components/Layout";
import Home from "./Home";
import Services from "./Services"
import About from "./About"
import Contact from "./Contact";
import ErrorElement from "./ErrorElement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorElement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;