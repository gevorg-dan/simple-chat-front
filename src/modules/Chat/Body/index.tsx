import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import moment from "moment";

import ChatHeader from "./components/Header";
import MessagesArea from "./components/MessagesArea";

import ChatState from "state";

export default observer(function ChatBody() {
  return (
    <ChatBodyWrapper>
      <ChatHeader
        userName={ChatState.currentUser?.name!}
        usersCount={ChatState.users.length}
      />
      <MessagesArea
        messages={ChatState.messages}
        currentUserId={ChatState.currentUser?.id!}
        sendNewMessage={(newMessage: string) =>
          ChatState.sendMessage(newMessage, moment())
        }
      />
    </ChatBodyWrapper>
  );
});

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
