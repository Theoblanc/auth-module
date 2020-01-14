import jwt from "jsonwebtoken";
import fs from "fs";

const PUBLICK_KEY = fs.readFileSync("src/certs/public.pem");
// const PRIVATE_KEY = fs.readFileSync("src/certs/private.pem");

interface IGetAccessTokenFromHeader {
  (header: any): string;
}

export const getAccessTokenFromHeader: IGetAccessTokenFromHeader = (
  headers: any
) => {
  if (!headers) {
    headers.authorization = "";
  }

  return headers["authorization"].replace(/Bearer /i, "");
};

interface IGetUserFromAccessToken {
  (accessToken: string): Promise<any | null>;
}

export const getUserFromAccessToken: IGetUserFromAccessToken = async (
  accessToken: string
) => {
  try {
    const JWT: any = await jwt.verify(accessToken, PUBLICK_KEY);
    if (JWT.sub === "accessToken") return JWT;
  } catch (e) {}
  return null;
};
