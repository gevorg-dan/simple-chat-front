import React from "react";
import styled from "styled-components";
import { useObserver } from "mobx-react-lite";
import moment from "moment";
import { useHistory } from "react-router";

import ChatHeader from "./components/Header";
import MessagesArea from "./components/MessagesArea";

import State from "state";

export default function ChatBody() {
  const history = useHistory();

  function logout() {
    State.disconnectFromChat();
    history.replace("/sign-in");
  }

  function sendNewMessage(newMessage: string) {
    State.sendMessage(newMessage, moment());
  }
  return useObserver(() => (
    <ChatBodyWrapper>
      <ChatHeader
        userName={State.currentUser?.name!}
        usersCount={State.users.length}
        logout={logout}
      />
      <MessagesArea
        messages={State.messages}
        currentUserId={State.currentUser?.id!}
        messageForReply={State.messageForReply}
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
