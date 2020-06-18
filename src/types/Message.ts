import { Moment } from "moment";

export interface MessageInterface {
  authorId: string;
  author: string;
  text: string;
  date: Moment;
}
