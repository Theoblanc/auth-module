import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import LoginPresenter from "./LoginPresenter";
import { LOGIN_USER } from "../../../graphql/queries/LoginQueries";
import cookie from "js-cookie";

const LoginContainer: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [loginMutation] = useMutation(LOGIN_USER);

  const onSubmit = async (data: any) => {
    const variables = {
      email: data.email,
      password: data.password
    };

    try {
      const {
        data: {
          loginUser: { accessToken, refreshToken }
        }
      } = await loginMutation({ variables });

      // session으로 바꾸자

      cookie.set("accessToken", accessToken);
      cookie.set("refreshToken", refreshToken);
    } catch (e) {
      console.log(e);
    }

    console.log(data);
  };

  return <LoginPresenter onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />;
};

export default LoginContainer;
