import WithSideBar from "../../../../shared/layouts/WithSideBar";
import HomeContainer from "../HomeContainer";

const HomeScreen = () => {
  return (
    <WithSideBar>
      <h1>Welcome</h1>
      <HomeContainer />
    </WithSideBar>
  );
};

export default HomeScreen;
