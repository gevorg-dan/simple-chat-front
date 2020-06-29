import React from "react";
import styled from "styled-components";

import Messages from "../Messages";
import NewMessageArea from "./NewMessageArea";

import { Message } from "state";

interface MessagesAreaInterface {
  messages: Message[];
  currentUserId: string;
  messageForReply: Message | null;
  sendNewMessage: (a: string) => void;
}

function MessagesArea({
  messages,
  currentUserId,
  messageForReply,
  sendNewMessage,
}: MessagesAreaInterface) {
  React.useEffect(() => {
    const messagesContainer = document.getElementById("messagesContainer");
    if (!messagesContainer) return;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <>
      <MessagesAreaWrapper id="messagesContainer">
        <MessagesAreaBody>
          {messages && (
            <Messages messages={messages} currentUserId={currentUserId} />
          )}
        </MessagesAreaBody>
      </MessagesAreaWrapper>
      <NewMessageArea
        messageForReply={messageForReply}
        sendMessage={sendNewMessage}
      />
    </>
  );
}

const MessagesAreaBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

const MessagesAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: calc(100% - 120px);
  margin: 30px 0 0;
  background-color: white;
  overflow-y: auto;
`;

export default MessagesArea;
