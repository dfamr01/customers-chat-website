import { UsersService } from "../users-services/users.service";

class UsersController {
  usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  async getAddresses(query?: string) {
    const addresses = await this.usersService.getAddresses(query);
    return addresses;
  }
}

export { UsersController };
