// websocket.base.ts
import io, { Socket } from "socket.io-client";
import { ENV_VARS } from "../utils/envConfig";

export class WebSocketBase {
  protected static socket: Socket | null = null;

  constructor() {
    if (!WebSocketBase.socket) {
      WebSocketBase.socket = io(ENV_VARS.VITE_WEBSOCKET_SERVER, {
        transports: ["websocket"],
        withCredentials: true,
        forceNew: true,
        timeout: 10000,
        path: ENV_VARS.VITE_WEBSOCKET_PATH,
      });

      this.initializeSocketListeners();
    }
  }

  private initializeSocketListeners() {
    if (WebSocketBase.socket) {
      WebSocketBase.socket.on("connect", () => {
        console.info("Connected to the websocket server");
      });

      WebSocketBase.socket.on("connect_error", (err) => {
        console.error("Connection error:", err);
      });
    }
  }

  protected emitWithAck<T, R>(event: string, data: T): Promise<R> {
    return new Promise((resolve) => {
      if (WebSocketBase.socket) {
        WebSocketBase.socket.emit(event, data, (response: R) => {
          resolve(response);
        });
      } else {
        throw new Error("WebSocket is not initialized");
      }
    });
  }

  protected on(event: string, callback: (...args: unknown[]) => void) {
    if (WebSocketBase.socket) {
      WebSocketBase.socket.on(event, callback);
    } else {
      throw new Error("WebSocket is not initialized");
    }
  }
}
