import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared/router/router";
import { selectIsUserLoggedIn } from "./shared/store/user-store/user-selectors";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface AppProps {
  isLoggedIn: boolean;
}
const App: React.FC<AppProps> = ({ isLoggedIn }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router(isLoggedIn)} />
      </ThemeProvider>
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
