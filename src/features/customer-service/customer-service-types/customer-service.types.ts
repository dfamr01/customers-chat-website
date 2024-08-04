import { Call } from "../../../shared/interfaces/shared.interface";

export interface EnrichedCall extends Call {
  lastMessage: string;
  totalMessages: number;
}
