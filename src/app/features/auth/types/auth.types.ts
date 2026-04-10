import { ErrorResponse } from "../../../core/model/error-response.model";

export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {

  accessToken: string;
  refreshToken: string;
  user: CurrentUser;
}

export interface RegisterRequest {
   firstName: string;
   lastName: string;
   phoneCode: string;
   phoneNumber: string;
   email: string;
   password: string;
}

export interface CurrentUser{
  id:Number;
  firstName:String;
  lastName:String;
  phoneCode:String;
  phoneNumber:String;
  email:String;
}
