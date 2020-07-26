import React from "react";
import { LoginWrapper, Icon } from "./Login.styled";

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
            아이디
            <input
              type='text'
              placeholder='login'
              id='email'
              name='email'
              ref={register}
              autoComplete='email'
            />
          </label>
        </div>

        <div>
          <label htmlFor='password'>
            비밀번호
            <input
              type='password'
              placeholder='password'
              id='password'
              name='password'
              autoComplete='new-password'
              ref={register}
            />
          </label>
        </div>
        <div>
          <a href='register'>회원가입</a>
        </div>

        <button type='submit'>로그인</button>
      </form>
    </LoginWrapper>
  );
};

export default LoginPresenter;
