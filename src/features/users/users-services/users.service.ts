import axios from "axios";
import { ENV_VARS } from "../../../shared/utils/envConfig";
import { Address } from "../users-types/users.types";

class UsersService {
  public path = "/users";

  // async getAddresses(query: string): Promise<Address[]> {
  //   const response = await axios.get(
  //     `${ENV_VARS.VITE_API_SERVER}${this.path}/addresses`,
  //     {
  //       params: { q: query },
  //     }
  //   );
  //   return response.data.data;
  // }

  async getPolicy() {
    const response = await axios.get(`${ENV_VARS.VITE_API_SERVER}${this.path}`);
    return response.data.data;
  }

  async getPolicyHash(): Promise<string> {
    const response = await axios.get(
      `${ENV_VARS.VITE_API_SERVER}${this.path}/getPolicyHash`
    );
    return response.data.data;
  }

  async updatePolicy(newPolicy) {
    const response = await axios.post(
      `${ENV_VARS.VITE_API_SERVER}${this.path}/admin`,
      {
        data: newPolicy,
      }
    );
    console.log("🚀 ~ UsersService ~ updatePolicy ~ response:", response);
    return newPolicy;
  }
}

const userService = new UsersService();
export { UsersService, userService };
