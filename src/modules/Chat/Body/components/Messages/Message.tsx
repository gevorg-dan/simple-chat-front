import React from "react";
import moment, { Moment } from "moment";
import styled from "styled-components";

import MessageActions from "./MessageActions";

import { Message as MessageInterface, User } from "state";

import State from "state";

export interface MessageActionInterface {
  action: string;
  onClick: () => void;
}

export function MessageComponent({
  text,
  date,
  author,
  reply,
  currentUserId,
  actions,
  isReply,
  isOwn: isOwnProp,
  withoutAuthor,
}: {
  currentUserId: string;
  text: string;
  date: Moment;
  author: User;
  reply?: MessageInterface;
  actions: MessageActionInterface[];
  isReply?: boolean;
  isOwn?: boolean;
  withoutAuthor?: boolean;
}) {
  const isOwn = isOwnProp || currentUserId === author.id;
  const replyAuthor = State.getUserById(reply?.author!);
  const CurrentMessageComponent = isReply ? ReplyMessage : Message;
  return (
    <MessageWrapper own={isOwn} isReply={isReply}>
      {!(isOwn || isReply) && <MessageAuthor>{author.name}</MessageAuthor>}
      <CurrentMessageComponent own={isOwn}>
        {reply && (
          <MessageComponent
            text={reply.text}
            date={moment(reply.date)}
            author={replyAuthor!}
            reply={reply.reply}
            currentUserId={currentUserId}
            actions={[]}
            isReply={true}
            isOwn={isOwn}
            withoutAuthor={author.id === reply.author}
          />
        )}
        <MessageActions actions={actions} isOwn={isOwn}>
          {isReply && !withoutAuthor && (
            <ReplyMessageAuthor own={isOwn}>{author.name}</ReplyMessageAuthor>
          )}
          {text}
        </MessageActions>
      </CurrentMessageComponent>
      {!isReply && (
        <MessageDate own={isOwn}>{date.format("DD MMM YYYY")}</MessageDate>
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
  text-transform: capitalize;
`;

const ReplyMessageAuthor = styled.p<{ own?: boolean }>`
  font-size: 0.8rem;
  color: ${({ own }) => (own ? "#737373" : "white")};
  margin-bottom: 5px;
  align-self: flex-start;
  text-transform: capitalize;
`;

const MessageDate = styled.p<{ own?: boolean }>`
  font-size: 0.7rem;
  color: #a6adbe;
  margin-top: 7px;
  padding: 0 5px;
  align-self: ${({ own }) => (own ? "flex-end" : "flex-start")};
`;

const MessageWrapper = styled.div<{ own?: boolean; isReply?: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ isReply }) => (isReply ? "0" : "20px 30px")};
`;

const Message = styled.div<{ own?: boolean }>`
  position: relative;
  font-size: 1.2rem;
  color: ${({ own }) => (own ? "#707c97" : "white")};
  align-self: ${({ own }) => (own ? "flex-end" : "flex-start")};
  max-width: 70%;
  padding: 25px 22px 15px;
  line-height: 24px;
  :hover {
    > div {
      display: flex;
    }
  }
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

const ReplyMessage = styled.div<{ own?: boolean }>`
  position: relative;
  font-size: 0.9rem;
  color: ${({ own }) => (own ? "#707c97" : "white")};
  align-self: ${({ own }) => (own ? "flex-end" : "flex-start")};
  width: 100%;
  margin-bottom: 15px;
  border-left: 2px solid ${({ own }) => (own ? "#707c97" : "white")};
  padding: 0 7px 3px;
`;
