import React from "react";
import styled from "styled-components";

function ChatBody() {
  return <ChatBodyWrapper></ChatBodyWrapper>;
}

const ChatBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 95%;
  max-width: 1024px;
  background-color: white;
`;

export default ChatBody;
