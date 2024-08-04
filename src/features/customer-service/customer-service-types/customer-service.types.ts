import { Call, UserDetails } from "../../../shared/interfaces/shared.interface";

export interface Message {
  sender: string;
  message: string;
  timestamp: Date;
}

export interface EnrichedCall extends Call {
  lastMessage: string;
  totalMessages: number;
}

export interface CreateMessageDto
  extends Omit<UserDetails, "id" | "isLoggedIn"> {
  message: string;
  sender: string;
}
