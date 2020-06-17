import { IMutationResolvers, IResult } from "src/types/graphql";
import User from "src/entities/Postgres/User/User.postgres";
import { getHashedPassword } from "src/libraries/security";
import SUCCESS from "src/libraries/successMessage";

const createUserController: IMutationResolvers["createUser"] = async (
  _,
  args,
  ctx
): Promise<IResult> => {
  const { email, password } = args;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) throw new Error("Email is already exists");

    const hashedPassword = await getHashedPassword(password);
    await User.create({ email, password: hashedPassword }).save();
    return { message: SUCCESS.COMMON.SOMETHING };
  } catch (error) {
    throw new Error();
  }
};

export default createUserController;
