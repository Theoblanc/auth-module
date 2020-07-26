import React from "react";
import { SignUpWrapper, Icon } from "./SignUp.styled";
interface IProps {
  onSubmit: Function;
  register: any;
  handleSubmit: Function;
}

const SignUpPresenter: React.FC<IProps> = ({ register, handleSubmit, onSubmit }) => {
  return (
    <SignUpWrapper>
      <div>
        <div>회원가입</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='email'>
            아이디
            <input
              type='text'
              placeholder='signup'
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
        <button type='submit'>회원가입</button>
      </form>
    </SignUpWrapper>
  );
};

export default SignUpPresenter;
