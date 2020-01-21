import React from "react";

interface IProps {
  onSubmit: Function;
  register: any;
  handleSubmit: Function;
}

const LoginPresenter: React.FC<IProps> = ({
  register,
  handleSubmit,
  onSubmit
}) => {
  return (
    <div>
      <div>Login 페이지</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="login" name="id" ref={register}></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default LoginPresenter;
