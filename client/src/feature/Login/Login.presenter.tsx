import React from "./node_modules/react";
import { LoginWrapper, Icon } from "./LoginStyles";

interface IProps {
  onSubmit: Function;
  register: any;
  handleSubmit: Function;
}

const LoginPresenter: React.FC<IProps> = ({ register, handleSubmit, onSubmit }) => {
  return (
    <LoginWrapper>
      <div>
        <Icon src='/images/logo512.png' alt='react'></Icon>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>아이디</label>
          <input type='text' placeholder='login' name='email' ref={register} autoComplete='email' />
        </div>

        <div>
          <label>비밀번호</label>
          <input
            type='password'
            placeholder='password'
            name='password'
            autoComplete='new-password'
            ref={register}
          />
        </div>

        <button type='submit'>로그인</button>
      </form>
    </LoginWrapper>
  );
};

export default LoginPresenter;
