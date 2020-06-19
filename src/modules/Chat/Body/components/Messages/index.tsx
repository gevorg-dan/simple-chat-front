import React from "react";
import { observer } from "mobx-react-lite";

import { OwnMessage, SomeoneMessage } from "./Message";

import { Message } from "state";

export default observer(function ({
  messages,
  currentUserId,
}: {
  messages: Message[];
  currentUserId: string;
}) {
  return (
    <>
      {messages.map(({ author, text, date }, index) => {
        return author.id === currentUserId ? (
          <OwnMessage key={index} text={text} date={date} />
        ) : (
          <SomeoneMessage key={index} author={author} text={text} date={date} />
        );
      })}
    </>
  );
});
