import React from "react";
import styled from "styled-components";

import ChatHeader from "./components/Header";
import MessagesArea from "./components/MessagesArea";

function ChatBody() {
  return (
    <ChatBodyWrapper>
      <ChatHeader userName={"Nika Jerrardo"} />
      <MessagesArea />
    </ChatBodyWrapper>
  );
}

const ChatBodyWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 95%;
  max-width: 1024px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 1px 18px 30px 8px rgba(0, 0, 0, 0.08);
`;

export default ChatBody;
