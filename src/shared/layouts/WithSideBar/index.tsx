import React from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  selectIsUserLoggedIn,
  selectUserDetailsState,
} from "../../store/user-store/user-selectors.js";
// src\shared\store\user-store\user-selectors
import Top from "./Top/index.js";

const WithSideBarWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled("div")`
  //flex-grow: 1;
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  height: 100%;
`;

const PageContent = styled("div")`
  width: 100%;
  max-width: 100%;

  overflow: auto;
  scroll-behavior: smooth;
  padding: 10px;
  box-sizing: border-box;
  /* display: inline-block; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function WithSideBarContainer({ isLoggedIn, userProfile, children }) {
  return (
    <WithSideBarWrapper>
      <Top isLoggedIn={isLoggedIn} userProfile={userProfile} />
      <Body>
        <PageContent>{children}</PageContent>
      </Body>
    </WithSideBarWrapper>
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: selectIsUserLoggedIn(state),
    userProfile: selectUserDetailsState(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

WithSideBarContainer.propTypes = {
  children: PropTypes.any,
  isLoggedIn: PropTypes.bool,
  userProfile: PropTypes.object,
};

const WithSideBar = React.memo(
  connect(mapStateToProps, mapDispatchToProps)(WithSideBarContainer)
);
export default WithSideBar;
