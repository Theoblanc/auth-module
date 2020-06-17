import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import fs from "fs";
import jsCookie from "js-cookie";
import { Response } from "express";
import Token from "src/entities/Postgres/Token/Token.postgres";

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

export { getHashedPassword, getComparedPassword };
