import React from "react";
import LoginPresenter from "./LoginPresenter";
import { useForm } from "react-hook-form";

const LoginContainer: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <LoginPresenter
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
