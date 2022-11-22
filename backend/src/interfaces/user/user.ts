import { IAccount } from '../account/account';

export interface IUser {
  id: string;
  username: string;
  account: IAccount;
}

export interface IUserRequest {
  id: string;
  username: string;
  password: string;
  account: IAccount;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserLoged {
  id: string;
  username: string;
}

export interface IUserLoginResponse {
  token: string;
  user: IUserLoged;
}
