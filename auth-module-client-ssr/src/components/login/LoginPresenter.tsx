import React from "react";
import { LoginWrapper } from "./LoginStyles";

interface IProps {
  onSubmit: Function;
  register: any;
  handleSubmit: Function;
}

const LoginPresenter: React.FC<IProps> = ({
  register,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <LoginWrapper>
      <div>Login 페이지</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="login" name="email" ref={register} />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register}
        />
        <button type="submit">login</button>
      </form>
    </LoginWrapper>
  );
};

export default LoginPresenter;
