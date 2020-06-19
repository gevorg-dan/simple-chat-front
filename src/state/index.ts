import { Moment } from "moment";
import io from "socket.io-client";
import moment from "moment";
import { action, observable } from "mobx";
import { Cookies } from "react-cookie";

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

class ChatState {
  cookies = new Cookies();

  currentUser: User | undefined;
  @observable messages: Message[] = [];
  @observable users: User[] = [];

  private socket = io.connect("http://localhost:3333");

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
    this.messages = [...this.messages, message];
  }

  @action
  private addUser(user: User) {
    this.users = [...this.users, user];
  }

  public connectToChat() {
    this.socket.on("login-success", ({ data: { user } }: any) => {
      this.currentUser = new User(user.id, user.name);
      this.cookies.set("user", this.currentUser, { path: "/" });
    });

    this.socket.on("start", ({ data }: any) => {
      this.setMessages(
        data.messages.map((message: any) => ({
          ...message,
          date: moment(message.date),
        }))
      );
      this.setUsers(data.users);
    });

    this.socket.on("new-message-added", ({ data: { newMessage } }: any) => {
      this.addMessage({ ...newMessage, date: moment(newMessage.date) });
    });
  }

  public sendMessage(text: string, date: Moment) {
    this.socket.emit("new-message", {
      text,
      date: date.format(),
      authorId: this.currentUser?.id,
    });
  }

  public authorize(login: string) {
    const cookieUser = this.cookies.get("user");
    const user = cookieUser ? { id: cookieUser.id } : { name: login };
    this.socket.emit("login", user);
  }
}

export default new ChatState();
