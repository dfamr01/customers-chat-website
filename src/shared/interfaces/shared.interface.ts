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
