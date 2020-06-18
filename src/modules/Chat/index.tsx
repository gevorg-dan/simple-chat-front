import React from "react";
import styled from "styled-components";

import ChatBody from "./Body";

function Chat() {
  return (
    <ChatWrapper>
      <ChatBody />
    </ChatWrapper>
  );
}

export const ChatWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
`;

export default Chat;
