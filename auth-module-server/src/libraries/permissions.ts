import { rule, shield } from "graphql-shield";

const rules = {
  isAuthorized: rule()(async (parent, args, ctx, info) => Boolean(ctx.user.id))
};

const permissions = shield({
  Query: {
    // User
    fetchMe: rules.isAuthorized
  },

  Mutation: {}
});

export default permissions;
