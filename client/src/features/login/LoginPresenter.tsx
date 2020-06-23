import React from "react";
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
        <Icon src='/images/logo512.png' alt='react' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='email'>
            <input
              type='text'
              placeholder='login'
              id='email'
              name='email'
              ref={register}
              autoComplete='email'
            />
            아이디
          </label>
        </div>

        <div>
          <label htmlFor='password'>
            <input
              type='password'
              placeholder='password'
              id='password'
              name='password'
              autoComplete='new-password'
              ref={register}
            />
            비밀번호
          </label>
        </div>

        <button type='submit'>로그인</button>
      </form>
    </LoginWrapper>
  );
};

export default LoginPresenter;
