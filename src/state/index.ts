import io from "socket.io-client";
import { Moment } from "moment";
import { action, observable } from "mobx";

import globalEventBus from "../lib/globalEventBus";

export class User {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class Message {
  id: string;
  text: string;
  author: string;
  date: string;
  reply?: Message;

  constructor(
    id: string,
    text: string,
    author: string,
    date: string,
    reply?: Message
  ) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.date = date;
    this.reply = reply!;
  }
}

class State {
  currentUser: User | undefined;
  @observable messageForReply: Message | null = null;
  @observable messages: Message[] = [];
  @observable users: User[] = [];

  private socket = io.connect("http://localhost:3333");

  private setCurrentUser(user: User) {
    this.currentUser = user;
  }

  @action
  private setMessages(messages: Message[]) {
    this.messages = messages;
  }

  @action
  private setUsers(users: User[]) {
    this.users = users;
  }

  @action
  private addMessage(message: Message) {
    this.messages = [...this.messages, { ...message }];
  }

  @action
  private addUser(user: User) {
    this.users = [...this.users, user];
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  @action
  setMessageForReply(message?: Message) {
    this.messageForReply = message || null;
  }

  public connectToChat() {
    this.socket.on("error", ({ message }: any) => {
      console.log(message);
    });
    this.socket.on("sign-up-failed", () => {
      globalEventBus.emit("SIGN_UP_FAILED", true);
    });
    this.socket.on("sign-in-failed", () => {
      globalEventBus.emit("SIGN_IN_FAILED", true);
    });
    this.socket.on("send-message-failed", () => {
      globalEventBus.emit("SEND_MESSAGE_FAILED", true);
    });

    this.socket.on(
      "sign-up-success",
      ({ newUser: { login, password } }: any) => {
        this.signIn(login, password);
      }
    );

    this.socket.on("sign-in-success", ({ user }: any) => {
      if (!user) {
        throw new Error("Sign-in failed");
      }
      this.setCurrentUser(new User(user.id, user.login));

      globalEventBus.emit("SIGN_IN_SUCCESS", true);
      this.socket.emit("connect-to-chat");
    });

    this.socket.on("user-joined", ({ user }: any) => {
      if (!user) {
        throw new Error("Sign-in failed");
      }
      if (this.users.find(({ id }) => id === user.id)) return;
      this.users.push(new User(user.id, user.login));
    });

    this.socket.on("send-message-success", ({ data: { message } }: any) => {
      this.setMessageForReply();
      const newMessage = new Message(
        message.id,
        message.text,
        this.getUserById(message.author)?.id!,
        message.date,
        message.reply
      );
      this.addMessage(newMessage);
    });

    this.socket.on("successful-chat-connection", ({ data }: any) => {
      console.log(data);
      this.setUsers(
        data.users.map((user: any) => new User(user.id, user.login))
      );
      this.setMessages(
        data.messages.map(
          (message: any) =>
            new Message(
              message.id,
              message.text,
              this.getUserById(message.author)?.id!,
              message.date,
              message.reply
            )
        )
      );
    });
  }

  public sendMessage(text: string, date: Moment) {
    if (!this.currentUser) return;
    console.log(this.messageForReply);
    this.socket.emit("send-message", {
      text,
      date: date.format(),
      author: this.currentUser.id,
      reply: this.messageForReply,
    });
  }

  public signUp(login: string, password: string) {
    this.socket.emit("sign-up", { login, password });
  }
  public signIn(login: string, password: string) {
    this.socket.emit("sign-in", { login, password });
  }
  public disconnectFromChat() {
    this.socket.emit("logout");
  }
}

export default new State();
