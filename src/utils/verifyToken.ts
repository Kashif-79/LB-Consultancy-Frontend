import { jwtDecode } from "jwt-decode";

export interface CustomJwtPayload {
  email: string;
  role: "admin" | "consultant" | "student";
  iat?: number;
  exp?: number;
}

export const verifyToken = (token: string): CustomJwtPayload | null => {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
};
