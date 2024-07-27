import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { EnrichedCall } from "../../customer-service-types/customer-service.types";

interface ChatMessagesModalProps {
  open: boolean;
  onClose: () => void;
  chat: EnrichedCall | null;
}

const ChatMessagesModal: React.FC<ChatMessagesModalProps> = ({
  open,
  onClose,
  chat,
}) => {
  if (!chat) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box style={{ display: "flex" }}>
            <Typography variant="h6" component="h2">
              {"Chat messages with"}
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{ paddingLeft: "1ch", color: "#a410a3" }}
            >
              {chat.firstName} {chat.lastName}
            </Typography>
          </Box>

          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <TableContainer
          component={Paper}
          sx={{ flexGrow: 1, overflow: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Message</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chat.messages.toReversed().map((message, index) => (
                <TableRow key={index}>
                  <TableCell>{message.message}</TableCell>
                  <TableCell>
                    {new Date(message.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default ChatMessagesModal;
