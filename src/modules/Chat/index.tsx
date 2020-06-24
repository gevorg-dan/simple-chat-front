import React from "react";
import styled from "styled-components";

import ChatBody from "./Body";

import State from "state";
import { toJS } from "mobx";

function Chat() {
  React.useEffect(() => {
    console.log(toJS(State.messages));
    console.log(toJS(State.users));
    console.log(State.currentUser);
  }, [State]);
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
