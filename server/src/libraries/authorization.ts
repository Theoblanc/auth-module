import fs from 'fs';
import jwt from 'jsonwebtoken';
import Token from 'src/entities/Postgres/Token/Token.postgres';
import { Response, Request } from 'express';

interface Authorizations {
  getAccessTokenFromHeader(headers: any): Promise<string>;
  getUserFromAccessToken(accessToken: string): Promise<any>;
  createAccessToken(token: string, res: Response): Promise<string>;
  createRefreshToken(id: string): Promise<string>;
}

const PUBLICK_KEY = fs.readFileSync('src/certs/public.pem');
const PRIVATE_KEY = fs.readFileSync('src/certs/private.pem');

function authorizations(): Authorizations {
  async function getAccessTokenFromHeader(headers: any) {
    if (!headers.authorization) {
      headers.authorization = '';
    }
    return headers['authorization'].replace(/Bearer /i, '');
  }

  async function getUserFromAccessToken(accessToken: string) {
    try {
      const JWT: any = await jwt.verify(accessToken, PUBLICK_KEY);
      if (JWT.sub === 'accessToken') return JWT;
    } catch (e) {
      throw new Error(e);
    } // 비회원의 경우, try-catch 없이 jwt.verify에서 실패하면 시스템 중단
    return null;
  }

  async function createAccessToken(jwtToken: string, res: Response): Promise<string> {
    try {
      const jWtResfreshToken: any = await jwt.verify(jwtToken, PUBLICK_KEY);
      const refreshToken = await Token.findOne({ id: jWtResfreshToken.jti });
      if (!refreshToken) throw new Error();

      const twoHour = 2 * 60 * 60 * 1000;
      const isExpired = new Date().getTime() > new Date(refreshToken.updatedAt).getTime() + twoHour;
      if (isExpired) throw new Error();
      await Token.update({ id: jWtResfreshToken.jti }, { updatedAt: new Date() });

      const accessToken = await jwt.sign({ id: jWtResfreshToken.id }, PRIVATE_KEY, {
        algorithm: 'ES256',
        subject: 'accessToken',
        expiresIn: twoHour // seconds only
      });

      return accessToken;
    } catch (error) {
      res.cookie('accessToken', '', { httpOnly: true });
      res.cookie('refreshToken', '', { httpOnly: true });
      return '';
    }
  }

  async function createRefreshToken(id: string) {
    try {
      const refreshToken = await Token.create({
        userId: id,
        accessedAt: new Date()
      }).save();

      const JWTToken = await jwt.sign({}, PRIVATE_KEY, {
        jwtid: String(refreshToken.id),
        algorithm: 'ES256',
        subject: 'refreshToken'
      });
      return JWTToken;
    } catch (error) {
      throw new Error();
    }
  }

  return {
    getAccessTokenFromHeader,
    getUserFromAccessToken,
    createAccessToken,
    createRefreshToken
  };
}

export default authorizations;
