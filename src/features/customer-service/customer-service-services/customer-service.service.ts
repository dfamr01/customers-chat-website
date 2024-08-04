// call.service.ts
import axios from "axios";
import { Call, Message } from "../../../shared/interfaces/shared.interface";
import { ENV_VARS } from "../../../shared/utils/envConfig";
import { WebSocketBase } from "../../../shared/services/websocket.service";

class CallService extends WebSocketBase {
  public path = "/calls";

  constructor() {
    super();
  }

  async getAllCalls(): Promise<Record<string, Call>> {
    const response = await axios.get(`${ENV_VARS.VITE_API_SERVER}${this.path}`);
    return response.data.data;
  }

  onCallCreated(callback: (call: Call) => void) {
    this.on("callCreated", callback);
  }

  onCallDeleted(callback: (call: Call) => void) {
    this.on("callDeleted", callback);
  }

  onMessageSent(
    callback: (data: { callId: string; message: Message }) => void
  ) {
    this.on("messageSent", callback);
  }
}

export { CallService };
