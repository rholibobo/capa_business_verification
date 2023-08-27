import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import styled from "@emotion/styled";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation } from "react-router-dom";

import Styles from "./Navbar.module.css";
import HamburgerMenu from "../MobileView/Hamburger";

const StyledBox = styled(Box)({
  display: "flex",
  // justifyContent: "space-between",
  alignItems: "center",
  gap: "30px",
});
const StyledLogoutButton = styled(Button)({
  backgroundColor: "red",
  color: "#ffffff",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: "#960018",
  },
});
const LoginButton = styled(Button)({
  backgroundColor: "red",
  color: "#ffffff",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: "#960018",
  },
});
const SignupButton = styled(Button)({
  backgroundColor: "red",
  color: "#ffffff",
  borderRadius: "10px",
  ":hover": {
    backgroundColor: "#960018",
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { authUser, userSignOut } = useAuth();
  const location = useLocation();
  const isMobileView = useMediaQuery("(max-width:1000px)");

  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signOut = () => {
    userSignOut();
  };
  return (
    <Box
      position="static"
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
        {!isMobileView ? null : <HamburgerMenu />}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Box sx={{ padding: "1rem 0" }}>
            <Link to="/">
              <Button
                sx={{ textTransform: "capitalize", color: "black" }}
                className={location.pathname === "/" ? Styles.active : ""}
                onClick={handleCloseNavMenu}
              >
                Home
              </Button>
            </Link>

            <Link to="/about-us">
              <Button
                sx={{ textTransform: "capitalize", color: "black" }}
                className={location.pathname === "/about-us" ? Styles.active : ""}
                onClick={handleCloseNavMenu}
              >
                About Us
              </Button>
            </Link>
            <Link to="/verification">
              <Button
                sx={{ textTransform: "capitalize", color: "black" }}
                className={location.pathname === "/verification" ? Styles.active : ""}
                onClick={handleCloseNavMenu}
              >
                Business Verification
              </Button>
            </Link>
          </Box>
        </Box>

        <Box sx={{}}>
          {!authUser ? (
            <StyledBox>
              <Link to="/login">
                <Button
                  variant="contained"
                  // color="success"
                  sx={{
                    display: { xs: "none", md: "block" },
                    backgroundColor: "#051e34",
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="contained"
                  // color="success"
                  sx={{
                    display: { xs: "none", md: "block" },
                    color: "#ffffff",
                    border: "1px solid #051e34",
                  }}
                >
                  SignUp
                </Button>
              </Link>
            </StyledBox>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", gap: "2rem" }}>
                <Typography variant="h6" gutterBottom>
                  Welcome {authUser.email}
                </Typography>
                <StyledLogoutButton onClick={signOut}>
                  Sign Out
                </StyledLogoutButton>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
