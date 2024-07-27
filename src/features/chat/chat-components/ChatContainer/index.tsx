import React from "react";
import ChatMessageBox from "./ChatMessageBox";
import callController from "../../../customer-service/customer-service-controller/customer-service.controller";
import { connect } from "react-redux";
import { selectUserDetailsState } from "../../../../shared/store/user-store/user-selectors";
import { UserDetails } from "../../../../shared/interfaces/shared.interface";
import { useNavigate } from "react-router-dom";

interface ChatContainerProps {
  userProfile: UserDetails;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ userProfile }) => {
  const navigate = useNavigate();

  const handleSendMessage = async (message: string) => {
    // Logic to send the message

    return callController.forwardMessage({
      ...userProfile,
      sender: userProfile.email,
      message,
    });
  };

  const handleClose = async () => {
    // Logic to send the message
    callController.deleteCall(userProfile.email);
    navigate("/login"); // Redirect to login page
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
