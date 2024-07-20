import React from "react";
import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <Box sx={{ p: 4, maxWidth: "1440px", m: "0 auto" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: "clamp(45px, 6vw, 64px)",
          fontWeight: 700,
          textAlign: "left",
          mb: 5,
        }}
      >
        Contact
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#F1F3F4",
              borderRadius: "12px",
            }}
          >
            <Typography
              sx={{ fontSize: 20, fontWeight: 500, color: "#8B8B8B" }}
            >
              Phone
            </Typography>
            <Typography
              sx={{ fontSize: "clamp(18px, 3.5vw, 40px)", fontWeight: 600 }}
            >
              +49 30 915-88492
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#F1F3F4",
              borderRadius: "12px",
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <Typography
                sx={{ fontSize: 20, fontWeight: 500, color: "#8B8B8B" }}
              >
                Socials
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ pl: 0 }}>
                  <img src={instagram} alt="logo" style={{ height: "38px" }} />
                </IconButton>
                <IconButton>
                  <img src={whatsapp} alt="logo" style={{ height: "38px" }} />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              alignItems: "flex-start",
              justifyContent: "center",
              backgroundColor: "#F1F3F4",
              borderRadius: "12px",
              height: "190px",
            }}
          >
            <Typography
              sx={{ fontSize: 20, fontWeight: 500, color: "#8B8B8B" }}
            >
              Address
            </Typography>
            <Typography
              sx={{
                fontSize: "clamp(18px, 3.5vw, 40px)",
                fontWeight: 600,
                width: "85%",
              }}
            >
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              alignItems: "flex-start",
              justifyContent: "center",
              backgroundColor: "#F1F3F4",
              borderRadius: "12px",
              height: "190px",
            }}
          >
            <Typography
              sx={{ fontSize: 20, fontWeight: 500, color: "#8B8B8B" }}
            >
              Working Hours
            </Typography>
            <Typography
              sx={{ fontSize: "clamp(18px, 3.5vw, 40px)", fontWeight: 600 }}
            >
              24 hours a day
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Box />
          <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32670.908982628065!2d13.329679044814165!3d52.510274580509424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sde!2sde!4v1721234355055!5m2!1sde!2sde"
      width="100%"  // Задает ширину 100% от родительского контейнера
      height="350"  // Высота
      style={{
        maxWidth: "1360px",  // Максимальная ширина
        borderRadius: "12px",  // Радиус углов
        border: "0",  // Убираем рамку
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
