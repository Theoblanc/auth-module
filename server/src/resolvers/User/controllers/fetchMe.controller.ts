import { IQueryResolvers, IUserProfile } from "src/types/graphql";
import User from "src/entities/Postgres/User/User.postgres";

const fetchMe: IQueryResolvers["fetchMe"] = async (
  parent,
  args,
  ctx
): Promise<IUserProfile> => {
  const userId = ctx.user;
  if (!userId) throw new Error();
  try {
    const user = await User.findOneOrFail({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    throw new Error();
  }
};

export default fetchMe;
