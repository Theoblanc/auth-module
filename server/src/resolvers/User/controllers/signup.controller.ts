import { IMutationResolvers } from "src/types/graphql";
import User from "src/entities/Postgres/User/User.postgres";
import { getComparedPassword, getHashedPassword } from "src/libraries/security";
import authorizations from "src/libraries/authorization";

const signupController: IMutationResolvers["signup"] = async (_, args, ctx) => {
  const { email, password } = args;
  const user = await User.findOne({ where: { email } });
  if (user) throw new Error("Email is already exists");

  const hashedPassword = await getHashedPassword(password);
  await User.create({ email, password: hashedPassword }).save();
  return { message: "" };
};

export default signupController;
