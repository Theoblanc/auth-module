import { IMutationResolvers } from 'src/types/graphql';
import User from 'src/entities/Postgres/User/User.postgres';
import { getHashedPassword } from 'src/libraries/security';

const signUpController: IMutationResolvers['signUp'] = async (_, args, ctx) => {
  const { email, password } = args;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) throw new Error('Email is already exists');

    const hashedPassword = await getHashedPassword(password);
    await User.create({ email, password: hashedPassword }).save();
  } catch (error) {
    throw new Error();
  }

  return { message: '' };
};

export default signUpController;
