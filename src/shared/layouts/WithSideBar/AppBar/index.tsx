import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const Caption = styled(Typography)`
  user-select: none;
`;

function PrimarySearchAppBar({ isLoggedIn, userProfile }) {
  const { firstName } = userProfile;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#051e34" }}>
          <Toolbar>
            <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
              <Caption variant="h6" noWrap>
                CS
              </Caption>
            </Link>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex" }}>
              {isLoggedIn && (
                <IconButton
                  component="button"
                  color="inherit"
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={"account-menu"}
                  aria-haspopup="true"
                >
                  <Avatar>{firstName[0]}</Avatar>
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

const component = React.memo(PrimarySearchAppBar);
export default component;
