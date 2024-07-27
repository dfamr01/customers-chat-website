import React from "react";
import ChatContainer from "../chat-components/ChatContainer";
import WithSideBar from "../../../shared/layouts/WithSideBar/index";
const ChatScreen: React.FC = () => {
  return (
    <WithSideBar>
      <h1>Chat</h1>
      <ChatContainer />
    </WithSideBar>
  );
};

export default ChatScreen;
