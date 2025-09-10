import NavBar from "./components/NavBar";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import MyProjects from "./components/MyProjects";
import MyPlans from "./components/MyPlans";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import UnderConstruction from "./components/UnderConstruction";

function NavBarWrapper() {
  const navigate = useNavigate();
  const onChange = (key: string) => {
    navigate(`portfolio/${key.toLowerCase()}`);
  };
  return <NavBar onChange={onChange} />;
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBarWrapper />
        <Routes>
          <Route path="/portfolio" element={<HomePage />} />
          <Route path="/portfolio/home" element={<HomePage />} />
          <Route path="/portfolio/contact" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
