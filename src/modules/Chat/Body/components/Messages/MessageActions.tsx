import React from "react";
import styled from "styled-components";

import { MessageActionInterface } from "./Message";

interface MessageActionsInterface {
  children: React.ReactNode;
  actions: MessageActionInterface[];
}

export default function MessageActions({
  children,
  actions,
}: MessageActionsInterface) {
  return (
    <>
      <MessageActionsTooltip>
        {actions &&
          actions.map(({ action, onClick }, index) => (
            <ActionElement key={index} onClick={onClick}>
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
  padding: 5px 7px;
  border-top-right-radius: 8px;
`;

const ActionElement = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: rgba(88, 88, 88, 0.8);
`;
