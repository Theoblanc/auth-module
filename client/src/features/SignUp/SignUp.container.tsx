import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import Router from "next/router";
import { CREATE_USER } from "../../../graphql/mutations/SignupQueries";
import SignUpPresenter from "./SignUp.presenter";

const SignUpContainer: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [signupMutation] = useMutation(CREATE_USER);

  const onSubmit = async data => {
    console.log("data", data);
    try {
      const result = await signupMutation({
        variables: {
          email: data?.email,
          password: data?.password
        }
      });

      console.log(result);
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return <SignUpPresenter onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />;
};

export default SignUpContainer;
