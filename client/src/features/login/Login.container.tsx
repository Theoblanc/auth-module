import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import LoginPresenter from "./Login.presenter";
import { LOGIN_USER } from "../../../graphql/mutations/LoginQueries";
import cookie from "js-cookie";
import Router from "next/router";

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

      cookie.set("accessToken", accessToken);
      cookie.set("refreshToken", refreshToken);
      Router.push("/main");
    } catch (e) {
      console.log(e);
    }
  };

  return <LoginPresenter onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />;
};

export default LoginContainer;
