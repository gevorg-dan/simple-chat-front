import { EventEmitter } from "./events";

export default new EventEmitter<{
  SIGN_IN_SUCCESS: boolean;
  SIGN_UP_FAILED: boolean;
  SIGN_IN_FAILED: boolean;
  SEND_MESSAGE_FAILED: boolean;
}>();
