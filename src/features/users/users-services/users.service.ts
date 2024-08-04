import axios from "axios";
import { ENV_VARS } from "../../../shared/utils/envConfig";
import { Address } from "../users-types/users.types";

class UsersService {
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
}

export { UsersService };
