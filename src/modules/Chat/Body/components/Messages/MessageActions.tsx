import React from "react";
import styled from "styled-components";

import { MessageActionInterface } from "./Message";

interface MessageActionsInterface {
  children: React.ReactNode;
  actions: MessageActionInterface[];
  isOwn?: boolean;
}

export default function MessageActions({
  children,
  actions,
  isOwn,
}: MessageActionsInterface) {
  return (
    <>
      <MessageActionsTooltip>
        {actions &&
          actions.map(({ action, onClick }, index) => (
            <ActionElement own={isOwn} key={index} onClick={onClick}>
              {action}
            </ActionElement>
          ))}
      </MessageActionsTooltip>
      {children}
    </>
  );
}

export const MessageActionsTooltip = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  padding: 10px 15px;
  border-top-right-radius: 8px;
`;

const ActionElement = styled.span<{ own?: boolean }>`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${({ own }) => (own ? "rgba(88, 88, 88, 0.8)" : "white")};
`;
