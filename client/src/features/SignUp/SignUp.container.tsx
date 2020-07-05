import React from "react";
import SignUpPresenter from "./SignUp.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_USER } from "../../../graphql/mutations/SignupQueries";

const SignUpContainer = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ data }) => {
    console.log("data", data);
    const [signupMutation] = useMutation(CREATE_USER);

    try {
      await signupMutation({
        variables: {
          email: data?.email,
          password: data?.password
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return <SignUpPresenter onSubmit={onSubmit} register={register} handleSubmit={handleSubmit} />;
};

export default SignUpContainer;
