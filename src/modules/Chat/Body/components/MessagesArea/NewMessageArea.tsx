import React from "react";
import styled from "styled-components";

import buttonImg from "./SendImg.svg";

interface NewMessageAreaInterface {
  message: string;
  setMessage: (a: string) => void;
  sendMessage: () => void;
}

function NewMessageArea({
  message,
  setMessage,
  sendMessage,
}: NewMessageAreaInterface) {
  return (
    <NewMessageAreaWrapper>
      <NewMessageInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение"
        rows={3}
      />
      <SendButton>
        <img src={buttonImg} alt="" />
      </SendButton>
    </NewMessageAreaWrapper>
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
  flex-grow: 1;
  padding: 20px 40px 10px;
  color: rgba(112, 124, 151, 0.5);
  font-size: 1.3rem;
  border: none;
  outline: none;
  resize: none;
  ::placeholder {
    color: rgba(112, 124, 151, 0.5);
  }
`;

const NewMessageAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 120px);
  border-top: 2px solid rgba(112, 124, 151, 0.1);
`;

export default NewMessageArea;
