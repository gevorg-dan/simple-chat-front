import React from "react";
import styled from "styled-components";

interface ChatHeaderInterface {
  userName: string;
  usersCount: number;
}

function ChatHeader({ userName, usersCount }: ChatHeaderInterface) {
  return (
    <ChatHeaderWrapper>
      <UserInfoWrapper>
        <p style={{ fontSize: "1.7rem", textTransform: "capitalize" }}>
          {userName}
        </p>
        <p style={{ fontSize: "1.3rem", textTransform: "capitalize" }}>
          Участников {usersCount}
        </p>
      </UserInfoWrapper>
    </ChatHeaderWrapper>
  );
}

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ChatHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: #fafbff;
  padding: 0 60px;
  border-bottom: 2px solid rgba(112, 124, 151, 0.1);
`;

export default ChatHeader;
