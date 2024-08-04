import { CreateCallDto, CreateMessageDto } from "../users-types/users.types";
import { WebSocketBase } from "../../../shared/services/websocket.service";
import { Call, Message } from "../../../shared/interfaces/shared.interface";

class UsersWebSocketService extends WebSocketBase {
  createCall(callData: CreateCallDto): Promise<Call> {
    return this.emitWithAck<CreateCallDto, Call>("createCall", callData);
  }

  deleteCall(id: string): Promise<boolean> {
    return this.emitWithAck<string, boolean>("deleteCall", id);
  }

  forwardMessage(messageData: CreateMessageDto): Promise<Message> {
    return this.emitWithAck<CreateMessageDto, Message>(
      "forwardMessage",
      messageData
    );
  }
}

export { UsersWebSocketService };
