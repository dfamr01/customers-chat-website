import PropTypes from "prop-types";
import AppBar from "../AppBar/index";

function Top({ isLoggedIn, userProfile }) {
  return <AppBar isLoggedIn={isLoggedIn} userProfile={userProfile} />;
}

Top.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userProfile: PropTypes.object,
};

export default Top;
