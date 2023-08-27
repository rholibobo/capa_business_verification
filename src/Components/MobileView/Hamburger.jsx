import { useState } from "react";

import {
  Box,
  Drawer,
  IconButton,
  List,
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu, Close, Home, Info, Verified } from "@mui/icons-material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import Styles from "./hamburger.module.css";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Menu
        onClick={toggleDrawer}
        sx={{ color: "black", fontSize: "30px", marginTop: "1rem" }}
      />

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: { xs: "250px", sm: "400px" } }}>
          <div styles={{ posiiton: "relative" }}>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "40px",
                color: "#FC2F32",
              }}
            >
              <Close />
            </IconButton>
          </div>
          <br />
          <List sx={{ marginTop: "3rem" }}>
            <Link to="/" className={Styles.link}>
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>

                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <br />
            <Link to="/about-us" className={Styles.link}>
              <ListItemButton>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>

                <ListItemText primary="About Us" />
              </ListItemButton>
            </Link>
            <br />
            <Link to="/verification" className={Styles.link}>
              <ListItemButton>
                <ListItemIcon>
                  <Verified />
                </ListItemIcon>

                <ListItemText primary="Business Verfification" />
              </ListItemButton>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Box sx={{ paddingLeft: "1rem" }}>
              <Link to="/login" className={Styles.link}>
                <Button
                  variant="contained"
                  sx={{
                    width: "50%",
                    backgroundColor: "purple",
                    textTransform: "capitalize",
                    padding: "0.7rem",
                  }}
                >
                  Login
                </Button>
              </Link>
              <br />
              <br />
              <Link to="/register" className={Styles.link}>
                <Button
                  variant="contained"
                  sx={{
                    width: "50%",
                    backgroundColor: "purple",
                    textTransform: "capitalize",
                    color: "#ffffff",
                    padding: "0.7rem",
                  }}
                >
                  Signup
                </Button>
              </Link>
            </Box>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
