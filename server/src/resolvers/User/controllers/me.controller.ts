import User from 'src/entities/Postgres/User/User.postgres';
import { IQueryResolvers } from 'src/types/graphql';

const meController: IQueryResolvers['me'] = async (_, args, ctx) => {
  const { userId } = ctx.user;
  try {
    const user = await User.findOne({ id: userId });
    return user;
  } catch (error) {
    throw new Error();
  }
};

export default meController;
