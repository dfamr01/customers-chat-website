import { UsersWebSocketService } from "../users-services/users.websocket.service";
import { CreateCallDto, CreateMessageDto } from "../users-types/users.types";

class UsersWebSocketController {
  usersWebSocketService: UsersWebSocketService;

  constructor() {
    this.usersWebSocketService = new UsersWebSocketService();
  }

  async createCall(callData: CreateCallDto) {
    try {
      await this.usersWebSocketService.createCall(callData);
    } catch (error) {
      console.error("createCall", error);
    }
  }

  async deleteCall(id: string) {
    const success = await this.usersWebSocketService.deleteCall(id);
    return success;
  }

  async forwardMessage(messageData: CreateMessageDto) {
    const newMessage = await this.usersWebSocketService.forwardMessage(
      messageData
    );
    return newMessage;
  }
}

export { UsersWebSocketController };
