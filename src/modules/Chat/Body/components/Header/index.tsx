import React from "react";
import styled from "styled-components";

interface ChatHeaderInterface {
  userName: string;
}

function ChatHeader({ userName }: ChatHeaderInterface) {
  return (
    <ChatHeaderWrapper>
      <UserInfoWrapper>
        <p style={{ fontSize: "1.7rem", textTransform: "capitalize" }}>
          {userName}
        </p>
      </UserInfoWrapper>
    </ChatHeaderWrapper>
  );
}

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const ChatHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: #fafbff;
  padding-left: 60px;
  border-bottom: 2px solid rgba(112, 124, 151, 0.1);
`;

export default ChatHeader;
