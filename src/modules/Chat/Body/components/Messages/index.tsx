import React from "react";
import moment from "moment";
import { observer } from "mobx-react-lite";

import { MessageComponent } from "./Message";

import State, { Message } from "state";

export default observer(function ({
  messages,
  currentUserId,
}: {
  messages: Message[];
  currentUserId: string;
}) {
  return (
    <>
      {messages.map((message, index) => {
        const author = State.getUserById(message.author)!;
        return (
          <MessageComponent
            key={index}
            author={author}
            text={message.text}
            date={moment(message.date)}
            reply={message.reply}
            currentUserId={currentUserId}
            actions={[
              {
                action: "ответить",
                onClick: () => State.setMessageForReply({...message, author: message.author}),
              },
            ]}
          />
        );
      })}
    </>
  );
});
