import { Modal, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CenteredWrapper = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
}));

const BoxElement = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "white",
  width: 300,
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
}));

/**
 * A popup component that displays a message and a close button.
 * @param {object} props - The component props.
 * @param {boolean} props.open - Whether the popup is open or not.
 * @param {function} props.onClose - The function to call when the close button is clicked.
 * @param {string} props.email - The email address to display in the popup message.
 */
export const Popup = ({ open, onClose, email }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <CenteredWrapper>
        <BoxElement>
          {email ? (
            <Typography variant='body1' color='black'>
              A password reset link has been sent to your email address.
            </Typography>
          ) : (
            <Typography variant='body1' color='black'>
              Please enter your email address, a password reset link will be
              sent to you.
            </Typography>
          )}

          <Button
            variant='contained'
            color='primary'
            sx={{ mt: 3 }}
            fullWidth
            onClick={onClose}
          >
            Close
          </Button>
        </BoxElement>
      </CenteredWrapper>
    </Modal>
  );
};
