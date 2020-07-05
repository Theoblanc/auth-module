import styled from "styled-components";

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  form {
    width: 500px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    div {
      margin-top: 20px;

      label {
        display: block;
        font-size: 12px;
      }

      input {
        margin-top: 12px;
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        padding: 12px;
      }
    }
  }
  button {
    margin-top: 20px;
    height: 50px;
    background: #000000;
    color: #ffffff;
    outline: none;
  }
`;

export const Icon = styled.img`
  width: 250px;
  height: 250px;
`;
