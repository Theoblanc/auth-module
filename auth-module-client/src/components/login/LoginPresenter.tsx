import React from "react";

const LoginPresenter: React.FC = () => {
  return (
    <div>
      <div>Login 페이지</div>
      <form>
        <input type="text" placeholder="login"></input>
        <input type="password" placeholder="password"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default LoginPresenter;
