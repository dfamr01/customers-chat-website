import { UserDetails } from "../../../shared/interfaces/shared.interface";

export type Address = string;

export interface CreateCallDto extends UserDetails {}

export interface CreateMessageDto
  extends Omit<UserDetails, "id" | "isLoggedIn"> {
  message: string;
  sender: string;
}
