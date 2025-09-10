import NavBar from "./components/NavBar";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import MyProjects from "./components/MyProjects";
import MyPlans from "./components/MyPlans";

const onChange = (key: string) => {
  console.log(key)
}

const App = () => {
  return (
    <div>
      <NavBar onChange={onChange}/>
      <Biography />
      <Quotes />
      <MyProjects />
      <MyPlans />
      <Footer />
    </div>
  );
};

export default App;
