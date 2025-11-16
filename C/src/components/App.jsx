import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import * as testData from "../utils/testData.json";
import { Login } from "./Login";
import { Popup } from "./Popup";
import { validEmail, passwordRules } from "../utils/validations";
import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const WrapperElement = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fafafa",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

/**
 * The main App component.
 * This component renders the login form and handles the login form submission.
 * It also renders the logout button when the user is logged in.
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [showError, setShowError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  /**
   * Validates an email address.
   * Checks if the email address is empty, valid and if not, sets an error message.
   * If the email address is valid, sets a success message.
   * @param {string} email - The email address to validate.
   */
  const validateEmail = (email) => {
    const isValid = validEmail(email);
    if (!email) {
      setMessage({ type: "error", text: "Email is required." });
      setShowError(true);
    } else if (!isValid) {
      setMessage({
        type: "error",
        text: "Enter a valid email like test@example.com",
      });
      setShowError(true);
    } else {
      setMessage({ type: "success", text: "Email is valid" });
      setShowError(false);
    }
  };

  /**
   * Validates a password.
   * Checks if the password is empty, if so, sets an error message.
   * If the password is not empty, sets a success message.
   * @param {string} password - The password to validate.
   */
  const validatePassword = (password) => {
    if (!password) {
      setMessage({ type: "error", text: "Password is required." });
      setShowError(true);
    } else if (
      !passwordRules.length(password) ||
      !passwordRules.uppercase(password) ||
      !passwordRules.lowercase(password) ||
      !passwordRules.number(password) ||
      !passwordRules.symbol(password)
    ) {
      setMessage({
        type: "error",
        text: "Password does not meet the required criteria.",
      });
      setShowError(true);
    } else {
      setMessage({ type: "success", text: "Password is valid" });
      setShowError(false);
    }
  };

  /**
   * Handles the login form submission.
   * Checks if there are any errors in the login form, if so, sets an error message.
   * If there are no errors, calls the checkLoginInfo function to check the login information.
   * @param {Event} e - The event object of the form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (showError || !email || !password) {
      setMessage({ type: "error", text: "Login information is required." });
      setShowError(true);
      return;
    }

    checkLoginInfo();
  };

  /**
   * Checks if the login information matches the test data.
   * If the login information matches, sets a success message and logs the user in.
   * If the login information does not match, sets an error message.
   */
  const checkLoginInfo = () => {
    if (email === testData.email && password === testData.password) {
      setMessage({ type: "success", text: "Login successful." });
      setShowError(false);
      setLoggedIn(true);
    } else {
      setMessage({
        type: "error",
        text:
          email === testData.email ? "Incorrect password." : "Email not found.",
      });
      setShowError(true);
    }
  };

  /**
   * Handles the logout button click event.
   * Sets the logged in state to false, clears the email and password fields,
   * and resets the error message and show error state.
   */
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setMessage(null);
    setShowError(false);
  };

  return (
    <>
      {loggedIn ? (
        <Login onLogout={handleLogout} email={email} />
      ) : (
        <WrapperElement>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              width: { xs: "85%", sm: "80%", md: "40%", lg: "30%" },
              maxWidth: 420,
              borderRadius: 3,
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant='h4' align='center' gutterBottom>
              LOGIN
            </Typography>

            <Box
              component='form'
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label='Email*'
                type='email'
                value={email}
                onBlur={(e) => validateEmail(e.target.value)}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              <TextField
                label='Password*'
                type={showPassword ? "text" : "password"}
                value={password}
                onBlur={(e) => validatePassword(e.target.value)}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge='end'
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Box sx={{ mt: 1 }}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  Password must contain:
                </Typography>

                <ul style={{ marginTop: 4, paddingLeft: 20 }}>
                  <li
                    style={{
                      color: passwordRules.length(password) ? "green" : "red",
                    }}
                  >
                    8–16 characters
                  </li>
                  <li
                    style={{
                      color: passwordRules.uppercase(password)
                        ? "green"
                        : "red",
                    }}
                  >
                    One uppercase letter
                  </li>
                  <li
                    style={{
                      color: passwordRules.lowercase(password)
                        ? "green"
                        : "red",
                    }}
                  >
                    One lowercase letter
                  </li>
                  <li
                    style={{
                      color: passwordRules.number(password) ? "green" : "red",
                    }}
                  >
                    One number
                  </li>
                  <li
                    style={{
                      color: passwordRules.symbol(password) ? "green" : "red",
                    }}
                  >
                    One symbol
                  </li>
                </ul>
              </Box>

              {showError && message && (
                <Alert severity={message.type}>{message.text}</Alert>
              )}

              <Button
                variant='contained'
                color='primary'
                type='submit'
                fullWidth
              >
                Login
              </Button>
            </Box>

            <Typography variant='body2' align='center' sx={{ mt: 2 }}>
              <a
                href='#'
                style={{ textDecoration: "none", color: "#4f46e5" }}
                onClick={() => setForgotPassword(true)}
              >
                Forgot password?
              </a>
            </Typography>
          </Paper>

          <Popup
            open={forgotPassword}
            onClose={() => setForgotPassword(false)}
            email={email}
          />
        </WrapperElement>
      )}
    </>
  );
}
