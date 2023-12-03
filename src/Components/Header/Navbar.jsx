import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  Popover,
  Divider,
} from "@mui/material";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import useMediaQuery from "@mui/material/useMediaQuery";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

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
  padding: "0.5rem 1rem",
  textTransform: "capitalize",
  ":hover": {
    backgroundColor: "#960018",
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [arrow, setArrow] = useState(true);

  const { authUser, userSignOut } = useAuth();
  const location = useLocation();
  const isMobileView = useMediaQuery("(max-width:1000px)");

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
        // maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10vh",
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

        <Box sx={{ width: "30%" }}>
          <Box
            sx={{
              padding: "0rem 0",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
              // backgroundColor: "red",
              position: "relative",
            }}
            
          >
            

            <Link to="/about-us">
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "black",
                  fontWeight: "bold",
                  
                }}
                className={location.pathname === "/about-us" && Styles.active}
                // className={}
                
                onClick={handleCloseNavMenu}
              >
                About Us
              </Button>
            </Link>

            {/* dropdwon */}
            <Box className={Styles.verifyCont}>
              
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Product &nbsp; <KeyboardArrowDown />
              </Button>

              <div className={Styles.linkBox}>
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{ margin: "10px", cursor: "pointer", }}
                >
                  Company Search
                </Typography>
                <Divider />
                <Typography
                  gutterBottom
                  variant="body2"
                  sx={{ margin: "10px", cursor: "pointer", }}
                >
                  Personnel Search
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>

        <Box sx={{}}>
          {!authUser ? (
            <StyledBox>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  className={Styles.btn}
                  sx={{
                    display: { xs: "none", md: "block" },
                    textTransform: "capitalize",
                    backgroundColor: "#F3F3F2",
                    color: "#000",
                    border: "1px solid grey",
                    "&:hover": {
                      backgroundColor: "#E7E7EB",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  // className={Styles.btn}
                  sx={{
                    display: { xs: "none", md: "block" },
                    textTransform: "capitalize",
                    backgroundColor: "#F3F3F2",
                    color: "#000",
                    border: "1px solid grey",
                    "&:hover": {
                      backgroundColor: "#E7E7EB",
                    },
                  }}
                >
                  SignUp
                </Button>
              </Link>
            </StyledBox>
          ) : (
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <Typography variant="body1" gutterBottom>
                  {authUser.email}
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
