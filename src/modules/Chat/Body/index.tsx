import React from "react";
import styled from "styled-components";
import { useObserver } from "mobx-react-lite";
import moment from "moment";
import { useHistory } from "react-router";

import ChatHeader from "./components/Header";
import MessagesArea from "./components/MessagesArea";

import ChatState from "state";

export default function ChatBody() {
  const history = useHistory();

  function logout() {
    ChatState.disconnectFromChat();
    history.replace("/login");
  }

  function sendNewMessage(newMessage: string) {
    ChatState.sendMessage(newMessage, moment());
  }
  return useObserver(() => (
    <ChatBodyWrapper>
      <ChatHeader
        userName={ChatState.currentUser?.name!}
        usersCount={ChatState.users.length}
        logout={logout}
      />
      <MessagesArea
        messages={ChatState.messages}
        currentUserId={ChatState.currentUser?.id!}
        sendNewMessage={sendNewMessage}
      />
    </ChatBodyWrapper>
  ));
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
