import React, { useMemo } from "react";
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
import { styled } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
import { EnrichedCall } from "../../customer-service-types/customer-service.types";

const MessageCaption = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  white-space: normal;
`;

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

  const messages = useMemo(() => {
    return [...chat.messages].reverse();
  }, [chat.messages]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          maxWidth: "100%",
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
              {messages.map((message, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <MessageCaption>{message.message}</MessageCaption>
                  </TableCell>
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
