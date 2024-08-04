import React from "react";
import ChatMessageBox from "./ChatMessageBox";
import callController from "../../../customer-service/customer-service-controller/customer-service.controller";
import { connect } from "react-redux";
import { selectUserDetailsState } from "../../../../shared/store/user-store/user-selectors";
import { UserDetails } from "../../../../shared/interfaces/shared.interface";
import { useNavigate } from "react-router-dom";
import { usersController } from "../../../users/users-controllers/users.controller";

interface ChatContainerProps {
  userProfile: UserDetails;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ userProfile }) => {
  const navigate = useNavigate();

  const handleSendMessage = async (message: string): Promise<void> => {
    await usersController.forwardMessage({
      ...userProfile,
      sender: userProfile.email,
      message,
    });
  };

  const handleClose = async () => {
    callController.deleteCall(userProfile.email);
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
