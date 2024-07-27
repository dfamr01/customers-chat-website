import { UserDetails } from "../../../shared/interfaces/shared.interface";

export interface Call {
  id: string;
  customer: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  timestamp: Date;
  messages: Message[];
}

export interface Message {
  sender: string;
  message: string;
  timestamp: Date;
}

export type Address = string;

export interface CreateCallDto extends UserDetails {}

export interface CreateMessageDto
  extends Omit<UserDetails, "id" | "isLoggedIn"> {
  message: string;
  sender: string;
}
