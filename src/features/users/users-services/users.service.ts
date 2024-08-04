import axios from "axios";
import { ENV_VARS } from "../../../shared/utils/envConfig";
import { Address, CreateCallDto } from "../users-types/users.types";
import { WebSocketBase } from "../../../shared/services/websocket.service";
import { Call } from "../../../shared/interfaces/shared.interface";

class Users extends WebSocketBase {
  public path = "/users";

  async getAddresses(query: string): Promise<Address[]> {
    const response = await axios.get(
      `${ENV_VARS.VITE_API_SERVER}${this.path}/addresses`,
      {
        params: { q: query },
      }
    );
    return response.data.data;
  }

  createCall(callData: CreateCallDto): Promise<Call> {
    return this.emitWithAck<CreateCallDto, Call>("createCall", callData);
  }
}

const usersService = new Users();

export { usersService };
