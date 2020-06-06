import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IToken = {
  id: Scalars['String'];
  userId: Scalars['String'];
  accessedAt: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type IUser = {
  id: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type IUserProfile = {
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  email: Scalars['String'];
};

export type IReturn = {
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type IMutation = {
  createAccessToken?: Maybe<ITokenModel>;
  createUser: IReturn;
  loginUser: ITokenModel;
};


export type IMutationCreateAccessTokenArgs = {
  refreshToken: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ITokenModel = {
  accessToken: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
};

export type IQuery = {
  fetchMe: IUserProfile;
  fetchUser: IUserProfile;
};


export type IQueryFetchUserArgs = {
  userId: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Token: ResolverTypeWrapper<IToken>;
  User: ResolverTypeWrapper<IUser>;
  UserProfile: ResolverTypeWrapper<IUserProfile>;
  Return: ResolverTypeWrapper<IReturn>;
  Mutation: ResolverTypeWrapper<{}>;
  TokenModel: ResolverTypeWrapper<ITokenModel>;
  Query: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = ResolversObject<{
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Token: IToken;
  User: IUser;
  UserProfile: IUserProfile;
  Return: IReturn;
  Mutation: {};
  TokenModel: ITokenModel;
  Query: {};
}>;

export type ITokenResolvers<ContextType = any, ParentType extends IResolversParentTypes['Token'] = IResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  accessedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type IUserResolvers<ContextType = any, ParentType extends IResolversParentTypes['User'] = IResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type IUserProfileResolvers<ContextType = any, ParentType extends IResolversParentTypes['UserProfile'] = IResolversParentTypes['UserProfile']> = ResolversObject<{
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type IReturnResolvers<ContextType = any, ParentType extends IResolversParentTypes['Return'] = IResolversParentTypes['Return']> = ResolversObject<{
  ok?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = ResolversObject<{
  createAccessToken?: Resolver<Maybe<IResolversTypes['TokenModel']>, ParentType, ContextType, RequireFields<IMutationCreateAccessTokenArgs, 'refreshToken'>>;
  createUser?: Resolver<IResolversTypes['Return'], ParentType, ContextType, RequireFields<IMutationCreateUserArgs, 'email' | 'password'>>;
  loginUser?: Resolver<IResolversTypes['TokenModel'], ParentType, ContextType, RequireFields<IMutationLoginUserArgs, 'email' | 'password'>>;
}>;

export type ITokenModelResolvers<ContextType = any, ParentType extends IResolversParentTypes['TokenModel'] = IResolversParentTypes['TokenModel']> = ResolversObject<{
  accessToken?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
}>;

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = ResolversObject<{
  fetchMe?: Resolver<IResolversTypes['UserProfile'], ParentType, ContextType>;
  fetchUser?: Resolver<IResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<IQueryFetchUserArgs, 'userId'>>;
}>;

export type IResolvers<ContextType = any> = ResolversObject<{
  Token?: ITokenResolvers<ContextType>;
  User?: IUserResolvers<ContextType>;
  UserProfile?: IUserProfileResolvers<ContextType>;
  Return?: IReturnResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  TokenModel?: ITokenModelResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
}>;

