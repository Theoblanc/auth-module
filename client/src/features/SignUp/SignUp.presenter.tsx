import React from "react";
import { SignUpWrapper, Icon } from "./SignUp.styled";

const SignUpPresenter = ({ register, handleSubmit, onSubmit }) => {
  return (
    <SignUpWrapper>
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
          <a href='signUp'>회원가입</a>
        </div>

        <button type='submit'>로그인</button>
      </form>
    </SignUpWrapper>
  );
};

export default SignUpPresenter;
