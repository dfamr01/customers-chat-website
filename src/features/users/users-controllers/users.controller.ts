import { usersService } from "../users-services/users.service";
import { CreateCallDto, CreateMessageDto } from "../users-types/users.types";

class UsersController {
  constructor() {}
  async getAddresses(query?: string) {
    const addresses = await usersService.getAddresses(query);
    return addresses;
  }

  async createCall(callData: CreateCallDto) {
    const newCall = await usersService.createCall(callData);
    console.log("🚀 ~ UsersController ~ createCall ~ newCall:", newCall);
  }

  async forwardMessage(messageData: CreateMessageDto) {
    const newMessage = await usersService.forwardMessage(messageData);
    return newMessage;
  }
}

export const usersController = new UsersController();
