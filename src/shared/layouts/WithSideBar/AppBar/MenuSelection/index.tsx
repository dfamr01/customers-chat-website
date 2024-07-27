import React from "react";
import { Divider, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
// import { getUser } from "../../../../redux/user/selectors";
// import { getUserProfile } from "../../../../redux/userProfile/selectors";

const UserCaption = styled(Typography)`
  text-align: center;
`;

const MenuItemWrap = styled(MenuItem)`
  justify-content: center;
  .MuiMenu-root {
    background-color: blue;
  }
`;

const MenuWrap = styled(Menu)`
  .MuiMenu-root {
    background-color: blue;
  }
`;

export function MenuSelection({
  isLoggedIn,
  handleMenuClose,
  isMenuOpen,
  userMenuButtonRef,
  user,
  userProfile = {},
}) {
  const { isAgent, suid, firstName, lastName, displayName } = userProfile;

  const userCaption = firstName;

  function handleLogout() {
    handleMenuClose();
  }

  return (
    <Menu
      sx={{ "& .MuiMenu-paper": { maxHeight: "100%" } }}
      anchorEl={userMenuButtonRef}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={"account-menu"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div>
        {!!userCaption && (
          <>
            <UserCaption variant="h6" noWrap>
              {userCaption}
            </UserCaption>
          </>
        )}

        <MenuItemWrap component={Link} to="/account/profile">
          הגדרות פרופיל
        </MenuItemWrap>

        <MenuItemWrap component={Link} to="/account/notificationSettings">
          הגדרת התראות
        </MenuItemWrap>
      </div>
    </Menu>
  );
}

function mapStateToProps(state) {
  return {
    // user: getUser(state),
    // userProfile: selectUserDetailsState(state),
  };
}

const AppComponent = connect(mapStateToProps)(React.memo(MenuSelection));

export default AppComponent;
