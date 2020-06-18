import React from "react";

import { OwnMessage, SomeoneMessage } from "./Message";

import { MessageInterface } from "types/Message";

export default function ({
  messages,
  currentUserId,
}: {
  messages: MessageInterface[];
  currentUserId: string;
}) {
  return (
    <>
      {messages.map(({ authorId, author, text, date }, index) => {
        return authorId === currentUserId ? (
          <OwnMessage key={index} text={text} date={date} />
        ) : (
          <SomeoneMessage key={index} author={author} text={text} date={date} />
        );
      })}
    </>
  );
}
