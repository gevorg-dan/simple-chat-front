import React from "react";
import { observer } from "mobx-react-lite";

import { MessageComponent } from "./Message";

import { Message } from "state";

export default observer(function ({
  messages,
  currentUserId,
}: {
  messages: Message[];
  currentUserId: string;
}) {
  console.log(messages);
  return (
    <>
      {messages.map(({ author, text, date, reply }, index) => {
        return (
          <MessageComponent
            key={index}
            author={author}
            text={text}
            date={date}
            reply={reply}
            currentUserId={currentUserId}
          />
        );
      })}
    </>
  );
});
