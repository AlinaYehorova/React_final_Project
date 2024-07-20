import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import dogsForm from "../../assets/dogsForm.svg";

const Form = () => {
  const { register, handleSubmit, formState } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { errors } = formState;

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 6000);
    }, 3000);
  };

  return (
    <>
      <div
        style={{
          maxWidth: "1395px",
          height: "486px",
          background: "linear-gradient(to left,#2451c6,#0d50ff )",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          padding: "32px",
          margin: "0 auto",
          boxSizing: "border-box",
          backgroundImage: "url(${dogsForm})",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(45px, 6vw, 64px)",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              mt: 4,
              mb: 0,
            }}
          >
            5% off on the first order
          </h2>
        </div>
        <div style={{ display: "flex" }}>
          <img src={dogsForm} alt="dogs" style={{}} />
          <form onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: "516px" }}>
            <TextField
              sx={{
                mt: 4,
                width: "100%",
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                "& input": {
                  caretColor: "#FFFFFF", // Цвет курсора
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки при наведении
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки при фокусе
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#FFFFFF", // Цвет текста метки
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#FFFFFF", // Цвет плейсхолдера
                  opacity: 0.6, // Прозрачность плейсхолдера
                },
              }}
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 2,
                  message: "First Name must be at least 2 characters",
                },
              })}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ""}
              label="First Name"
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              sx={{
                width: "100%",

                mt: 2,
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                "& input": {
                  caretColor: "#FFFFFF", // Цвет курсора
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки при наведении
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки при фокусе
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#FFFFFF", // Цвет текста метки
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#FFFFFF", // Цвет плейсхолдера
                  opacity: 0.6, // Прозрачность плейсхолдера
                },
              }}
              {...register("lastName", {
                required: "Last Name is required",
                minLength: {
                  value: 2,
                  message: "Last Name must be at least 2 characters",
                },
              })}
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ""}
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              sx={{
                width: "100%",

                mt: 2,
                borderColor: "#FFFFFF",
                color: "#FFFFFF",
                "& input": {
                  caretColor: "#FFFFFF", // Цвет курсора
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки
                  },
                  "&:hover fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки при наведении
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FFFFFF", // Цвет рамки при фокусе
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#FFFFFF", // Цвет текста метки
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#FFFFFF", // Цвет плейсхолдера
                  opacity: 0.6, // Прозрачность плейсхолдера
                },
              }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              label="Email"
              variant="outlined"
              fullWidth
              margin="dense"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              endIcon={isLoading && <CircularProgress size={20} />}
              sx={{
                mt: 4,
                mb: 0,
                width: "100%",
                height: "58px",
                backgroundColor: "#FFFFFF",
                color: "#282828",
                "&:hover": {
                  backgroundColor: "#282828",
                  color: "#FFFFFF",
                },
                "&:active": {
                  backgroundColor: "#f5f5f5",
                  color: "#0D50FF",
                },
              }}
            >
              Get a discount
            </Button>
          </form>
          {showAlert && (
            <Snackbar open={showAlert}>
              <Alert severity="success">Form submitted successfully!</Alert>
            </Snackbar>
          )}
        </div>
      </div>
      <Box sx={{ maxWidth: "1395px", position: "relative", m: "0 auto" }}>
        <Paper
          elevation={0}
          sx={{
            maxWidth: "1395px",
            height: "486px",
            background: "linear-gradient(to left,#2451c6,#0d50ff )",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            px: 4,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: "clamp(45px, 6vw, 64px)",
                fontWeight: 700,
                color: "#FFFFFF",
                textAlign: "center",
                mt: 4,
                mb: 0,
              }}
            >
              5% off on the first order
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-beetwen",
              boxSizing: "border-box",
            }}
          >
            <img
              src={dogsForm}
              alt="dogs"
              style={{
                width: "92%",
                height: "100%",
                objectFit: "cover",
                mx: 10,
              }}
            />

            <form onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: "516px" }}>
              <TextField
                sx={{
                  mt: 4,
                  width: "100%",
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  "& input": {
                    caretColor: "#FFFFFF", // Цвет курсора
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки при наведении
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки при фокусе
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#FFFFFF", // Цвет текста метки
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#FFFFFF", // Цвет плейсхолдера
                    opacity: 0.6, // Прозрачность плейсхолдера
                  },
                }}
                {...register("firstName", {
                  required: "First Name is required",
                  minLength: {
                    value: 2,
                    message: "First Name must be at least 2 characters",
                  },
                })}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
                label="First Name"
                variant="outlined"
                fullWidth
                margin="dense"
              />
              <TextField
                sx={{
                  width: "100%",

                  mt: 2,
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  "& input": {
                    caretColor: "#FFFFFF", // Цвет курсора
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки при наведении
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки при фокусе
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#FFFFFF", // Цвет текста метки
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#FFFFFF", // Цвет плейсхолдера
                    opacity: 0.6, // Прозрачность плейсхолдера
                  },
                }}
                {...register("lastName", {
                  required: "Last Name is required",
                  minLength: {
                    value: 2,
                    message: "Last Name must be at least 2 characters",
                  },
                })}
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="dense"
              />
              <TextField
                sx={{
                  width: "100%",

                  mt: 2,
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  "& input": {
                    caretColor: "#FFFFFF", // Цвет курсора
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки при наведении
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFFFFF", // Цвет рамки при фокусе
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "#FFFFFF", // Цвет текста метки
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#FFFFFF", // Цвет плейсхолдера
                    opacity: 0.6, // Прозрачность плейсхолдера
                  },
                }}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                label="Email"
                variant="outlined"
                fullWidth
                margin="dense"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
                endIcon={isLoading && <CircularProgress size={20} />}
                sx={{
                  mt: 4,
                  mb: 0,
                  width: "100%",
                  height: "58px",
                  backgroundColor: "#FFFFFF",
                  color: "#282828",
                  "&:hover": {
                    backgroundColor: "#282828",
                    color: "#FFFFFF",
                  },
                  "&:active": {
                    backgroundColor: "#f5f5f5",
                    color: "#0D50FF",
                  },
                }}
              >
                Get a discount
              </Button>
            </form>
            {showAlert && (
              <Snackbar open={showAlert}>
                <Alert severity="success">Form submitted successfully!</Alert>
              </Snackbar>
            )}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Form;
