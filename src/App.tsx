import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/router/router";
import { selectIsUserLoggedIn } from "./shared/store/user-store/user-selectors";
import { connect } from "react-redux";
import PropTypes from "prop-types";

interface AppProps {
  isLoggedIn: boolean;
}

const App: React.FC<AppProps> = ({ isLoggedIn }) => {
  return (
    <>
      <RouterProvider router={router(isLoggedIn)} />
    </>
  );
};
function mapStateToProps(state) {
  return {
    isLoggedIn: selectIsUserLoggedIn(state),
  };
}
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
const AppComponent = connect(mapStateToProps)(App);
export default AppComponent;
