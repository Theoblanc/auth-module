import React from "./node_modules/react";
import LoginPresenter from "./Login.presenter";
import { useForm } from "./node_modules/react-hook-form";
import { useMutation } from "./node_modules/@apollo/react-hooks";
import { LOGIN_USER } from "./LoginQueries";

const LoginContainer: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [loginMutation] = useMutation(LOGIN_USER);

  const onSubmit = async (data: any) => {
    console.log(data);

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

      //session으로 바꾸자

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (e) {
      console.log(e);
    }
  };

  return <LoginPresenter onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />;
};

export default LoginContainer;
