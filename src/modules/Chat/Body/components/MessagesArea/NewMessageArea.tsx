import React from "react";
import styled from "styled-components";

import State, { Message } from "state";

import buttonImg from "./SendImg.svg";

interface NewMessageAreaInterface {
  messageForReply: Message | null;
  sendMessage: (a: string) => void;
}

function NewMessageArea({
  messageForReply,
  sendMessage,
}: NewMessageAreaInterface) {
  const [newMessageText, setNewMessageText] = React.useState("");
  const author = State.getUserById(messageForReply?.author!);

  function sendMessageHandler() {
    sendMessage(newMessageText);
    setNewMessageText("");
  }

  return (
    <>
      <ReplayMessageAreaWrapper>
        {messageForReply && (
          <ReplayMessage>
            <span>{author?.name}</span>
            <p>{messageForReply.text}</p>
          </ReplayMessage>
        )}
      </ReplayMessageAreaWrapper>
      <NewMessageAreaWrapper>
        <NewMessageInput
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
          placeholder="Введите сообщение"
          rows={3}
        />
        <SendButton onClick={sendMessageHandler}>
          <img src={buttonImg} alt="" />
        </SendButton>
      </NewMessageAreaWrapper>
    </>
  );
}

const SendButton = styled.button`
  will-change: transition;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: pointer;

  :hover {
    background: linear-gradient(
      325.78deg,
      rgba(42, 139, 242, 0.9) 14.76%,
      rgba(124, 184, 247, 0.9) 87.3%
    );
  }
  background: linear-gradient(325.78deg, #2a8bf2 14.76%, #7cb8f7 87.3%);
  box-shadow: 4px 6px 10px rgba(42, 139, 242, 0.15),
    2px 2px 25px rgba(42, 139, 242, 0.05), 4px 4px 25px rgba(42, 139, 242, 0.15);
`;

const NewMessageInput = styled.textarea`
  background: none;
  flex-grow: 0.8;
  color: rgba(112, 124, 151, 0.5);
  font-size: 1.3rem;
  border: none;
  outline: none;
  resize: none;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::placeholder {
    color: rgba(112, 124, 151, 0.5);
  }
`;

const NewMessageAreaWrapper = styled.div`
  display: flex;
  padding: 20px 40px 10px;

  justify-content: space-between;
  align-items: center;
  width: calc(100% - 120px);
  border-top: 2px solid rgba(112, 124, 151, 0.1);
`;

const ReplayMessageAreaWrapper = styled.div`
  height: 100px;
  padding: 10px 0;
  width: calc(100% - 120px);
`;

const ReplayMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  font-size: 0.9rem;
  width: 100%;
  height: 50px;
  border-left: 3px solid #707c97;
  padding-left: 10px;
  color: #707c97;

  > span {
    font-size: 0.8rem;
    margin-bottom: 5px;
    text-transform: capitalize;
    color: #737373;
  }
`;

export default NewMessageArea;
