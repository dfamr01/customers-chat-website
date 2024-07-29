import { AppDispatch } from "../../../shared/store/store";
import CallService from "../customer-service-services/customer-service.service";
import {
  addCall,
  setCalls,
  removeCall,
  addMessage,
} from "../customer-service-store/customer-service.slice";
import {
  Call,
  CreateCallDto,
  CreateMessageDto,
} from "../customer-service-types/customer-service.types";

import { dispatch } from "../../../shared/store/store";

class CallController {
  private dispatch: AppDispatch;

  constructor() {
    this.dispatch = dispatch;
    this.initializeSocketListeners();
  }

  private initializeSocketListeners() {
    CallService.onCallCreated((call: Call) => {
      this.dispatch(addCall(call));
    });

    CallService.onCallDeleted((call: Call) => {
      this.dispatch(removeCall(call?.email));
    });

    CallService.onMessageSent(({ callId, message }) => {
      this.dispatch(addMessage({ callId, message }));
    });
  }

  async getAddresses(query?: string) {
    const addresses = await CallService.getAddresses(query);
    return Array.from(addresses);
  }

  async getAllCalls() {
    const calls = await CallService.getAllCalls();
    this.dispatch(setCalls(calls));
  }

  async createCall(callData: CreateCallDto) {
    const newCall = await CallService.createCall(callData);
    this.dispatch(addCall(newCall));
  }

  async deleteCall(id: string) {
    const success = await CallService.deleteCall(id);
    return success;
  }

  async forwardMessage(messageData: CreateMessageDto) {
    const newMessage = await CallService.forwardMessage(messageData);
    return newMessage;
  }
}

const callController = new CallController();
export default callController;
