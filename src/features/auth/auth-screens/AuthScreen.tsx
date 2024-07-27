import WithSideBar from "../../../shared/layouts/WithSideBar";
import LoginContainer from "../auth-components/LoginContainer";

const AuthScreen = () => {
  return (
    <WithSideBar>
      <LoginContainer />
    </WithSideBar>
  );
};

export default AuthScreen;
