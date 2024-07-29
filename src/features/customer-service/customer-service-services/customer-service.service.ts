import axios from "axios";
import io, { Socket } from "socket.io-client";
import {
  Call,
  Message,
  Address,
  CreateCallDto,
  CreateMessageDto,
} from "../customer-service-types/customer-service.types";

import { ENV_VARS } from "../../../shared/utils/envConfig";
class CallService {
  private socket: Socket;
  public path = "/calls";

  constructor() {
    // this.socket = io(ENV_VARS.API_SERVER, {
    //   transports: ["websocket", "polling"],
    //   path: "/socket.io", // Make sure this matches the server-side path
    // });
    this.socket = io(ENV_VARS.WEBSOCKET_SERVER, {
      transports: ["websocket"],
      // transports: ["websocket", "polling"],
      withCredentials: true,
      forceNew: true,
      timeout: 10000, // Increase timeout
      path: "/socket.io", // Make sure this matches the server-side path
    });

    // this.socket = io(ENV_VARS.API_SERVER);
    // Check for successful connection
    this.socket.on("connect", () => {
      console.info("Connected to the websocket server");
    });

    // Handle connection errors
    this.socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });
  }

  async getAddresses(query: string): Promise<Address[]> {
    const response = await axios.get(
      `${ENV_VARS.API_SERVER}${this.path}/addresses`,
      {
        params: { q: query },
      }
    );
    return response.data.data;
  }

  async getAllCalls(): Promise<Record<string, Call>> {
    const response = await axios.get(`${ENV_VARS.API_SERVER}${this.path}`);
    return response.data.data;
  }

  createCall(callData: CreateCallDto): Promise<Call> {
    return new Promise((resolve) => {
      this.socket.emit("createCall", callData, (call: Call) => {
        resolve(call);
      });
    });
  }

  deleteCall(id: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.socket.emit("deleteCall", id, (success: boolean) => {
        resolve(success);
      });
    });
  }

  forwardMessage(messageData: CreateMessageDto): Promise<Message> {
    return new Promise((resolve) => {
      this.socket.emit("forwardMessage", messageData, (message: Message) => {
        resolve(message);
      });
    });
  }

  onCallCreated(callback: (call: Call) => void) {
    this.socket.on("callCreated", callback);
  }

  onCallDeleted(callback: (call: Call) => void) {
    this.socket.on("callDeleted", callback);
  }

  onMessageSent(
    callback: (data: { callId: string; message: Message }) => void
  ) {
    this.socket.on("messageSent", callback);
  }
}

export default new CallService();
