import React from "react";
import styled from "styled-components";

import logoutImg from "./logout.svg";

interface ChatHeaderInterface {
  userName: string;
  usersCount: number;
  logout: () => void;
}

function ChatHeader({ userName, usersCount, logout }: ChatHeaderInterface) {
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
      <LogoutWrapper>
        <LogoutButton onClick={logout}>
          <img
            src={logoutImg}
            alt="logout"
            style={{ height: "23px", width: "23px" }}
          />
        </LogoutButton>
      </LogoutWrapper>
    </ChatHeaderWrapper>
  );
}

const LogoutButton = styled.button`
  will-change: transition;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  background: none;
`;

const LogoutWrapper = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 1;
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
