import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Response } from "express";

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

const sendRefreshToken = (res: Response, refreshToken: string) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    // domain: "subdomain"
  });
};

export { getHashedPassword, getComparedPassword, sendRefreshToken };
