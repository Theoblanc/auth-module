import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fs from "fs";
import jsCookie from "js-cookie";
import { Response } from "express";
import Token from "src/entities/Postgres/Token/Token.postgres";

const PUBLICK_KEY = fs.readFileSync("src/certs/public.pem");
const PRIVATE_KEY = fs.readFileSync("src/certs/private.pem");

interface IGetHashedPassword {
  (password: string): Promise<string>;
}

const SALT_ROUNDS = 10;
const getHashedPassword: IGetHashedPassword = async (password) =>
  await bcrypt.hash(password, SALT_ROUNDS);

interface IGetComparedPassword {
  (password1: string, password2: string): Promise<boolean>;
}

const getComparedPassword: IGetComparedPassword = async (
  password1,
  password2
) => await bcrypt.compare(password1, password2);

interface IGetAccessTokenFromHeader {
  (header: any): string;
}

const getAccessTokenFromHeader: IGetAccessTokenFromHeader = (headers) => {
  if (!headers.authorization) {
    headers.authorization = "";
  }
  return headers["authorization"].replace(/Bearer /i, "");
};

interface IGetUserFromAccessToken {
  (accessToken: string): Promise<any | null>;
}

const getUserFromAccessToken: IGetUserFromAccessToken = async (accessToken) => {
  try {
    const JWT: any = await jwt.verify(accessToken, PUBLICK_KEY);
    if (JWT.sub === "accessToken") return JWT;
  } catch (e) {} // 비회원의 경우, try-catch 없이 jwt.verify에서 실패하면 시스템 중단
  return null;
};

interface ICreateAccessToken {
  (refreshToken: string): Promise<string>;
}

const createAccessToken: ICreateAccessToken = async (refreshToken) => {
  // JWT 리프레쉬 토큰 검증
  const JWT: any = await jwt.verify(refreshToken, PUBLICK_KEY);

  // JWT 엑세스 토큰 생성
  const accessToken = await jwt.sign({ id: JWT.id }, PRIVATE_KEY, {
    algorithm: "ES256",
    subject: "accessToken",
  });

  jsCookie.set("accessToken", accessToken);

  return accessToken;
};

interface ICreateRefreshToken {
  (id: string): Promise<string>;
}

const createRefreshToken: ICreateRefreshToken = async (id) => {
  // DB 리프레쉬 토큰 생성
  const refreshToken = await Token.create({
    // user.id: id,
    accessedAt: new Date(),
  });

  const JWTToken = await jwt.sign({}, PRIVATE_KEY, {
    jwtid: String(refreshToken._id),
    algorithm: "ES256",
    subject: "refreshToken",
  });

  return JWTToken;
  // JWT 리프레쉬 토큰 생성
  // const accessToken = await jwt.sign({ id: JWT.id }, PRIVATE_KEY, {
  //   algorithm: "ES256",
  //   subject: "accessToken",
  // });
  //
};

const sendRefreshToken = (res: Response, refreshToken: string) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    // domain: "subdomain"
  });
};

export {
  getHashedPassword,
  getComparedPassword,
  getAccessTokenFromHeader,
  getUserFromAccessToken,
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
};
