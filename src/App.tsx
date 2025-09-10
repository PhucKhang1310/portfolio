import NavBar from "./components/NavBar";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import MyProjects from "./components/MyProjects";
import MyPlans from "./components/MyPlans";

const App = () => {
  return (
    <div>
      <NavBar />
      <Biography />
      <Quotes />
      <MyProjects />
      <MyPlans />
      <Footer />
    </div>
  );
};

export default App;
