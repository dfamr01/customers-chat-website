import { AppDispatch } from "../../../shared/store/store";
import { CallService } from "../customer-service-services/customer-service.service";
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
  callService: CallService;

  constructor() {
    this.callService = new CallService();

    this.dispatch = dispatch;
    this.initializeSocketListeners();
  }

  private initializeSocketListeners() {
    this.callService.onCallCreated((call: Call) => {
      this.dispatch(addCall(call));
    });

    this.callService.onCallDeleted((call: Call) => {
      this.dispatch(removeCall(call?.email));
    });

    this.callService.onMessageSent(({ callId, message }) => {
      this.dispatch(addMessage({ callId, message }));
    });
  }

  async getAllCalls() {
    const calls = await this.callService.getAllCalls();
    this.dispatch(setCalls(calls));
  }
}

export { CallController };
