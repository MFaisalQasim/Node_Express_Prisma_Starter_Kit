import { Request, Router } from "express";

interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  password?: string;
  // firstName: string;
  // lastName: string | null | undefined;
  // role: string;
  // onBoardLink?: string | null;
  // avatarUrl?: string | null;
  // phoneNo?: string | null;
  // isActive: boolean;
  // isBlocked: boolean;
  // isDeleted: boolean;
  // businessId: string;
}

export interface UserRequest extends Request {
  user: IUser | null | any;
}

export interface ValidationError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}
