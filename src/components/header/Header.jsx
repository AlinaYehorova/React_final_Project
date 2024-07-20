import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../assets/logo.svg";
import catrImg from "../../assets/cartImg.svg";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={0}
        position="static"
        sx={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #DDDDDD",
          height: "128px",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <IconButton sx={{ mr: "clamp(0, 2vw, 2)" }}>
            <img
              src={logo}
              alt="logo"
              style={{ height: "clamp(30px, 7.5vw, 70px)" }}
            />
          </IconButton>
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}>
            <Button
              color="inherit"
              sx={{
                mx: "clamp(0.1, 1vw, 1)",
                color: "#282828",
                whiteSpace: "nowrap",
                fontSize: "clamp(12px, 1.8vw, 20px)",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              Main Page
            </Button>
            <Button
              color="inherit"
              sx={{
                mx: "clamp(0.1, 1vw, 1)",
                color: "#282828",
                whiteSpace: "nowrap",
                fontSize: "clamp(12px, 1.8vw, 20px)",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              Categories
            </Button>
            <Button
              color="inherit"
              sx={{
                mx: "clamp(0.1, 1vw, 1)",
                color: "#282828",
                whiteSpace: "nowrap",
                whiteSpace: "nowrap",
                fontSize: "clamp(12px, 1.8vw, 20px)",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              All products
            </Button>
            <Button
              color="inherit"
              sx={{
                mx: "clamp(0.1, 1vw, 1)",
                color: "#282828",
                whiteSpace: "nowrap",
                whiteSpace: "nowrap",
                fontSize: "clamp(12px, 1.8vw, 20px)",
                fontWeight: 500,
                textTransform: "none",
              }}
            >
              All sales
            </Button>
          </Box>

          <IconButton sx={{ ml: "clamp(0, 2vw, 2)" }}>
            <img
              src={catrImg}
              alt="logo"
              style={{ height: "clamp(20px, 5vw, 45px)" }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
