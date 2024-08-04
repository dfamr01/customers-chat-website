export interface Message {
  sender: string;
  message: string;
  timestamp: Date;
}

export interface LoginFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

export interface UserDetails extends LoginFormData {
  id?: string;
  isLoggedIn?: boolean;
}
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
