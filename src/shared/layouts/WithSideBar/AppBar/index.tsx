import * as React from "react";
import { Link } from "react-router-dom";
// import {styled, alpha} from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useRef, useState } from "react";
import MenuSelection from "./MenuSelection/index.js";
// import LogIn from "../../../components/LogIn/index.jsx";

const SignInButtonWrap = styled(Button)`
  color: inherit;
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  background-color: #5f5d5d;
  padding: 5px 35px;
`;

const FXCaption = styled(Typography)`
  user-select: none;
`;

function PrimarySearchAppBar({ isLoggedIn, userProfile }) {
  console.log("🚀 ~ PrimarySearchAppBar ~ userProfile:", userProfile);
  const { firstName } = userProfile;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#051e34" }}>
          <Toolbar>
            <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
              <FXCaption variant="h6" noWrap>
                R2Net
              </FXCaption>
            </Link>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              {isLoggedIn && (
                <IconButton
                  component="button"
                  color="inherit"
                  // href={setUserMenuButtonRef}
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={"account-menu"}
                  aria-haspopup="true"
                >
                  <Avatar>{firstName[0]}</Avatar>
                </IconButton>
              )}

              {/* {!isLoggedIn && (
                <SignInButtonWrap onClick={() => setOpenSignIn(true)}>
                  Log in
                </SignInButtonWrap>
              )} */}
            </Box>
          </Toolbar>
        </AppBar>
        {/* <MenuSelection
          isLoggedIn={isLoggedIn}
          handleMenuClose={handleMenuClose}
          isMenuOpen={isMenuOpen}
          userMenuButtonRef={userMenuButtonRef}
        /> */}
      </Box>
    </>
  );
}

const component = React.memo(PrimarySearchAppBar);
export default component;
