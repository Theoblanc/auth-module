import jwtDecode from "jwt-decode";
import Axios from "axios";
import getConfig from "next/config";
import cookie from "js-cookie";

const { BACKEND_HOST, BACKEND_PORT, BACKEND_GRAPHQL_ENDPOINT } = getConfig().publicRuntimeConfig;
const BACKEND_URI = `http://${BACKEND_HOST}:${BACKEND_PORT}/${BACKEND_GRAPHQL_ENDPOINT}`;

export async function checkExpiredToken(accessToken: string, refreshToken: string) {
  const decoded: any = jwtDecode(accessToken);

  // 만료된 예상 시간 보다 1분 앞선 시간이 현재시간보다 더 크면 만료 요청
  const isExpired = new Date().getTime() > new Date(decoded.exp * 1000).getTime();

  if (!isExpired) {
    return { accessToken, refreshToken };
  }

  // 만료 되었다면
  try {
    const response = await Axios.post(
      BACKEND_URI,
      {
        query: `
          mutation restoreAccessToken($refreshToken: String!) {
              restoreAccessToken(refreshToken: $refreshToken) {
                   accessToken 
              }
          }
        `,
        variables: { refreshToken }
      },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.data.accessToken) {
      cookie.set("accessToken", accessToken);

      return { accessToken, refreshToken };
    }
    cookie.remove("accessToken");
    return { accessToken: "", refreshToken };
  } catch (errors) {
    cookie.remove("accessToken");
    cookie.remove("refreshToken");
    return { accessToken: "", refreshToken: "" };
  }
}
