import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import UnderConstruction from "./components/UnderConstruction";

function NavBarWrapper() {
  const navigate = useNavigate();
  const onChange = (key: string) => {
    navigate(`/${key.toLowerCase()}`);
  };
  return <NavBar onChange={onChange} />;
}

const App = () => {
  return (
    <HashRouter>
      <div>
        <NavBarWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
