import Biography from "./Biography";
import Quotes from "./Quotes";
import MyProjects from "./MyProjects";
import MyPlans from "./MyPlans";

const HomePage = () => {
  return (
    <div>
      <Biography />
      <Quotes />
      <MyProjects />
      <MyPlans />
    </div>
  );
};

export default HomePage;
