import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const WrapperElement = styled(Box)(({}) => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f7fa",
  position: "relative",
}));

const PaperElement = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: "100%",
  maxWidth: 400,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
}));

const LogoutButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  padding: theme.spacing(1.3, 3),
  borderRadius: 10,
}));

/**
 * A login component that displays a welcome message and a logout button.
 * @param {object} props - The component props.
 * @param {function} props.onLogout - The function to call when the logout button is clicked.
 * @param {string} props.email - The email address to display in the welcome message.
 */
export function Login({ onLogout = () => {}, email }) {
  return (
    <WrapperElement>
      <PaperElement elevation={3}>
        <Typography variant='h3' fontWeight={700} gutterBottom>
          Welcome
        </Typography>

        <Typography
          variant='h5'
          color='#1976d2ff'
          fontWeight={600}
          gutterBottom
        >
          {email}!
        </Typography>
      </PaperElement>

      <LogoutButton variant='contained' color='primary' onClick={onLogout}>
        Logout
      </LogoutButton>
    </WrapperElement>
  );
}
