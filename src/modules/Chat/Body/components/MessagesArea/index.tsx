import React from "react";
import styled from "styled-components";
import moment from "moment";

import Messages from "../Messages";
import NewMessageArea from "./NewMessageArea";

import { MessageInterface } from "types/Message";

const testData: MessageInterface[] = [
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Привет, как дела?",
  },
  {
    authorId: "2141241245125125",
    author: "Сигизмунд",
    date: moment(),
    text: "Хорошо, что нового?",
  },
  {
    authorId: "781265781256815",
    author: "Антонио",
    date: moment(),
    text: "съел голубя",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Круто! вкусно?",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Привет, как дела?",
  },
  {
    authorId: "2141241245125125",
    author: "Сигизмунд",
    date: moment(),
    text: "Хорошо, что нового?",
  },
  {
    authorId: "781265781256815",
    author: "Антонио",
    date: moment(),
    text: "съел голубя",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Круто! вкусно?",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Привет, как дела?",
  },
  {
    authorId: "2141241245125125",
    author: "Сигизмунд",
    date: moment(),
    text: "Хорошо, что нового?",
  },
  {
    authorId: "781265781256815",
    author: "Антонио",
    date: moment(),
    text: "съел голубя",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Круто! вкусно?",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Привет, как дела?",
  },
  {
    authorId: "2141241245125125",
    author: "Сигизмунд",
    date: moment(),
    text: "Хорошо, что нового?",
  },
  {
    authorId: "781265781256815",
    author: "Антонио",
    date: moment(),
    text: "съел голубя",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Круто! вкусно?",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Привет, как дела?",
  },
  {
    authorId: "2141241245125125",
    author: "Сигизмунд",
    date: moment(),
    text: "Хорошо, что нового?",
  },
  {
    authorId: "781265781256815",
    author: "Антонио",
    date: moment(),
    text: "съел голубя",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Круто! вкусно?",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Привет, как дела?",
  },
  {
    authorId: "2141241245125125",
    author: "Сигизмунд",
    date: moment(),
    text: "Хорошо, что нового?",
  },
  {
    authorId: "781265781256815",
    author: "Антонио",
    date: moment(),
    text: "съел голубя",
  },
  {
    authorId: "12312313123",
    author: "Kirrill",
    date: moment(),
    text: "Круто! вкусно?",
  },
];

function MessagesArea() {
  const [message, setMessage] = React.useState("");
  return (
    <>
      <MessagesAreaWrapper>
        <MessagesAreaBody>
          <Messages messages={testData} currentUserId={testData[0].authorId} />
        </MessagesAreaBody>
      </MessagesAreaWrapper>
      <NewMessageArea
        message={message}
        setMessage={setMessage}
        sendMessage={console.log}
      />
    </>
  );
}

const MessagesAreaBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex-grow: 1;
`;

const MessagesAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 30px 60px 0;
  background-color: white;
  overflow-y: auto;
`;

export default MessagesArea;
