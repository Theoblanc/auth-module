import React from "react";
import SignUpPresenter from "./SignUp.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../../../graphql/mutations/SignupQueries";
import Router from "next/router";

const SignUpContainer: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [signupMutation] = useMutation(CREATE_USER);

  const onSubmit = async data => {
    console.log("data", data);
    try {
      await signupMutation({
        variables: {
          email: data?.email,
          password: data?.password
        }
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <SignUpPresenter onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />;
};

export default SignUpContainer;
