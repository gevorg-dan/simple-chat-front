import io from "socket.io-client";
import { Cookies } from "react-cookie";
import moment, { Moment } from "moment";
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
  author: User;
  date: Moment;

  constructor(id: string, text: string, author: User, date: Moment) {
    this.id = id;
    this.text = text;
    this.author = author;
    this.date = date;
  }
}

class State {
  cookies = new Cookies();

  currentUser: User | undefined;
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
        this.cookies.set("login", login, { path: "/" });
        this.cookies.set("password", password, { path: "/" });
        this.signIn(login, password);
      }
    );

    this.socket.on("sign-in-success", ({ user }: any) => {
      if (!user) {
        throw new Error("Sign-in failed");
      }
      this.cookies.set("login", user.login, { path: "/" });
      this.cookies.set("password", user.password, { path: "/" });
      this.setCurrentUser(new User(user._id, user.login));

      globalEventBus.emit("SIGN_IN_SUCCESS", true);
      this.socket.emit("connect-to-chat");
    });

    this.socket.on("user-joined", ({ user }: any) => {
      if (!user) {
        throw new Error("Sign-in failed");
      }
      this.users.push(new User(user._id, user.login));
    });

    this.socket.on("send-message-success", ({ data: { message } }: any) => {
      const newMessage = new Message(
        message._id,
        message.text,
        this.getUserById(message.authorId)!,
        moment(message.date)
      );
      this.addMessage(newMessage);
    });

    this.socket.on("successful-chat-connection", ({ data }: any) => {
      this.setUsers(
        data.users.map((user: any) => new User(user._id, user.login))
      );
      this.setMessages(
        data.messages.map(
          (message: any) =>
            new Message(
              message._id,
              message.text,
              this.getUserById(message.authorId)!,
              moment(message.date)
            )
        )
      );
    });
  }

  public sendMessage(text: string, date: Moment) {
    if (!this.currentUser) return;
    this.socket.emit("send-message", {
      text,
      date: date.format(),
      authorId: this.currentUser.id,
    });
  }

  public signUp(login: string, password: string) {
    this.socket.emit("sign-up", { login, password });
  }
  public signIn(login: string, password: string) {
    const cookieLogin = this.cookies.get("login");
    const cookiePassword = this.cookies.get("password");
    const signInData =
      cookieLogin && cookiePassword
        ? { login: cookieLogin, password: cookiePassword }
        : { login, password };
    this.socket.emit("sign-in", signInData);
  }
  public disconnectFromChat() {
    this.cookies.remove("login");
    this.cookies.remove("password");
  }
}

export default new State();
