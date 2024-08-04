import React, { useEffect } from "react";
import ChatMessageBox from "./ChatMessageBox";
import { connect } from "react-redux";
import { selectUserDetailsState } from "../../../../shared/store/user-store/user-selectors";
import { UserDetails } from "../../../../shared/interfaces/shared.interface";
import { useNavigate } from "react-router-dom";
import { UsersWebSocketController } from "../../../users/users-controllers/users.websocket.controller";

interface ChatContainerProps {
  userProfile: UserDetails;
}

let usersWebSocketController;

const ChatContainer: React.FC<ChatContainerProps> = ({ userProfile }) => {
  const navigate = useNavigate();

  useEffect(() => {
    usersWebSocketController = new UsersWebSocketController();
  }, []);
  const handleSendMessage = async (message: string): Promise<void> => {
    await usersWebSocketController.forwardMessage({
      ...userProfile,
      sender: userProfile.email,
      message,
    });
  };

  const handleClose = async () => {
    usersWebSocketController.deleteCall(userProfile.email);
    navigate("/login");
  };

  return (
    <div>
      <ChatMessageBox
        handleClose={handleClose}
        onSendMessage={handleSendMessage}
        maxLength={200}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userProfile: selectUserDetailsState(state),
  };
}

const ChatContainerComponent = connect(mapStateToProps)(ChatContainer);

export default ChatContainerComponent;
