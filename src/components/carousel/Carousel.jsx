import * as React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Dry & Wet Food",
    imgPath:
      "https://images.pexels.com/photos/18764148/pexels-photo-18764148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Litter Boxes & Litter Trays",
    imgPath:
      "https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Baskets & Beds",
    imgPath:
      "https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Toys",
    imgPath:
      "https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Care & Grooming",
    imgPath:
      "https://images.pexels.com/photos/9425940/pexels-photo-9425940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Snacks & Supplements",
    imgPath:
      "https://images.pexels.com/photos/271611/pexels-photo-271611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Runs & Fencing",
    imgPath:
      "https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    label: "Trees & Scratching",
    imgPath:
      "https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function Carousel() {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  let imagesPerView;

  if (isLg || isXl) {
    imagesPerView = 4;
  } else if (isMd) {
    imagesPerView = 3;
  } else if (isSm) {
    imagesPerView = 2;
  } else {
    imagesPerView = 1;
  }

  const maxSteps = images.length - imagesPerView + 1;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1360, flexGrow: 1, m: "0 auto", my: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: 4,
          mb: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "clamp(45px, 6vw, 64px)",
            fontWeight: 700,
            textAlign: "left",
            mr: 3,
          }}
        >
          Categories
        </Typography>
        <Box sx={{ width: "100%", borderBottom: "1px solid #DDDDDD" }}></Box>
        <Button
          variant="outlined"
          href="#outlined-buttons"
          sx={{
            whiteSpace: "nowrap",
            fontSize: "clamp(12px, 1.8vw, 20px)",
            fontWeight: 500,
            color: "#DDDDDD",
            borderColor: "#DDDDDD",
            minWidth: "fit-content",
            ":hover": { borderColor: "#DDDDDD" },
            ":active": { color: "#282828" },
          }}
        >
          All categories
        </Button>
      </Box>
      <Box sx={{ position: "relative" }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={5000}
        >
          {Array.from({ length: maxSteps }).map((_, index) => (
            <Box
              key={index}
              sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
            >
              {images.slice(index, index + imagesPerView).map((step) => (
                <Box
                  key={step.label}
                  sx={{
                    flex: 1,
                    mx: 2,
                    textAlign: "center",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "350px",
                      width: "100%",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                  <Button
                    href="#outlined-buttons"
                    sx={{
                      mt: 2,
                      color: "#282828",
                      fontSize: "clamp(12px, 1.8vw, 20px)",
                      fontWeight: 500,
                      textTransform: "none",
                      ":hover": { textDecoration: "underline" },
                      ":active": { color: "#DDDDDD" },
                    }}
                  >
                    {step.label}
                  </Button>
                </Box>
              ))}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
        <Box
          sx={{
            position: "absolute",
            bottom: 35,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            py: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: 0,
            transition: "opacity 0.5s",
            ":hover": { opacity: 1 },
          }}
        >
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            backButton={
              <IconButton onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </IconButton>
            }
            nextButton={
              <IconButton
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </IconButton>
            }
            sx={{
              background: "transparent",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
