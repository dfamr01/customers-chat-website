import React from "react";
import ChatMessageBox from "./ChatMessageBox";
import callController from "../../../customer-service/customer-service-controller/customer-service.controller";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { selectUserDetailsState } from "../../../../shared/store/user-store/user-selectors";
import { UserDetails } from "../../../../shared/interfaces/shared.interface";

interface ChatContainerProps {
  userProfile: UserDetails;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ userProfile }) => {
  const handleSendMessage = async (message: string) => {
    // Logic to send the message
    console.log("Sending message:", message);

    return callController.forwardMessage({
      ...userProfile,
      sender: userProfile.email,
      message,
    });
  };

  return (
    <div>
      <ChatMessageBox onSendMessage={handleSendMessage} maxLength={200} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userProfile: selectUserDetailsState(state),
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({}, dispatch);
// }

const ChatContainerComponent = connect(mapStateToProps)(ChatContainer);

export default ChatContainerComponent;
