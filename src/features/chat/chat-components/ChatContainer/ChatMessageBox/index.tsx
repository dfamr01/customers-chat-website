import React, { useState } from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

interface ChatMessageBoxProps {
  onSendMessage: (message: string) => Promise<void>;
  maxLength: number;
}

const ChatMessageBox: React.FC<ChatMessageBoxProps> = ({
  onSendMessage,
  maxLength,
}) => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      // onSendMessage(message)
      //   .then(() => {
      //     // setMessage("");
      //   })
      //   .catch((error) => {
      //     console.error("Error sending message:", error);
      //   });
    }
  };

  const handleClose = () => {
    navigate("/login"); // Redirect to login page
  };

  return (
    <Box sx={{ width: 400, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Message</Typography>
        <IconButton onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message here..."
        variant="outlined"
        required
        inputProps={{ maxLength: maxLength }}
        sx={{ mb: 1 }}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" color="textSecondary">
          {message.length}/{maxLength}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          disabled={!message.trim()}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatMessageBox;
