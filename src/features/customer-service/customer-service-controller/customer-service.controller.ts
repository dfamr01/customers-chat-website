import { AppDispatch } from "../../../shared/store/store";
import { callService } from "../customer-service-services/customer-service.service";
import {
  addCall,
  setCalls,
  removeCall,
  addMessage,
} from "../customer-service-store/customer-service.slice";
import { Call } from "../../../shared/interfaces/shared.interface";

import { dispatch } from "../../../shared/store/store";

class CallController {
  private dispatch: AppDispatch;

  constructor() {
    this.dispatch = dispatch;
    this.initializeSocketListeners();
  }

  private initializeSocketListeners() {
    callService.onCallCreated((call: Call) => {
      this.dispatch(addCall(call));
    });

    callService.onCallDeleted((call: Call) => {
      this.dispatch(removeCall(call?.email));
    });

    callService.onMessageSent(({ callId, message }) => {
      this.dispatch(addMessage({ callId, message }));
    });
  }

  async getAllCalls() {
    const calls = await callService.getAllCalls();
    this.dispatch(setCalls(calls));
  }

  async deleteCall(id: string) {
    const success = await callService.deleteCall(id);
    return success;
  }
}

const callController = new CallController();
export default callController;
