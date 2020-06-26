import React from "react";
import styled from "styled-components";

import { Message as MessageInterface, User } from "state";
import { Moment } from "moment";

export function MessageComponent({
  text,
  date,
  author,
  reply,
  currentUserId,
}: {
  currentUserId: string;
  text: string;
  date: Moment;
  author: User;
  reply?: MessageInterface;
}) {
  const isOwn = currentUserId === author.id;
  return (
    <MessageWrapper own={isOwn}>
      {!isOwn && <MessageAuthor>{author.name}</MessageAuthor>}
      <Message own={isOwn}>{text}</Message>
      <MessageDate own={isOwn}>{date.format("DD MMM YYYY")}</MessageDate>
      {reply && (
        <MessageComponent
          text={reply.text}
          date={reply.date}
          author={reply.author}
          reply={reply.reply}
          currentUserId={currentUserId}
        />
      )}
    </MessageWrapper>
  );
}

const MessageAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #737373;
  margin-bottom: 10px;
  align-self: flex-start;
`;

const MessageDate = styled.p<{ own?: boolean }>`
  font-size: 0.7rem;
  color: #a6adbe;
  margin-top: 7px;
  padding: 0 5px;
  align-self: ${({ own }) => (own ? "flex-end" : "flex-start")};
`;

const MessageWrapper = styled.div<{ own?: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
`;

const Message = styled.div<{ own?: boolean }>`
  font-size: 1.2rem;
  color: ${({ own }) => (own ? "#707c97" : "white")};
  align-self: ${({ own }) => (own ? "flex-end" : "flex-start")};
  max-width: 70%;
  padding: 14px 22px 17px;
  line-height: 24px;

  background: ${({ own }) =>
    own ? "white" : "linear-gradient(93.27deg, #60A9F6 0%, #2A8BF2 100%)"};
  border-radius: ${({ own }) =>
    own ? "10px 10px 0 10px" : "0 10px 10px 10px"};
  border: ${({ own }) =>
    own ? "1px solid rgba(112, 124, 151, 0.25)" : "none"};
  box-shadow: ${({ own }) =>
    own
      ? "15px 15px 35px rgba(112, 124, 151, 0.05), 10px 10px 25px rgba(112, 124, 151, 0.05)"
      : "0px 10px 50px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 25px rgba(42, 139, 242, 0.1)"};
`;
