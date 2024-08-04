import { AppDispatch, dispatch } from "../../../shared/store/store";
import { usersService } from "../users-services/users.service";
import { CreateCallDto } from "../users-types/users.types";

class UsersController {
  private dispatch: AppDispatch;

  constructor() {
    this.dispatch = dispatch;
  }
  async getAddresses(query?: string) {
    const addresses = await usersService.getAddresses(query);
    return addresses;
  }

  async createCall(callData: CreateCallDto) {
    const newCall = await usersService.createCall(callData);
    console.log("🚀 ~ UsersController ~ createCall ~ newCall:", newCall);
  }
}

export const usersController = new UsersController();
