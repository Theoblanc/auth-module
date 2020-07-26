import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IMutation = {
  __typename?: 'Mutation';
  createAccessToken?: Maybe<ITokenModel>;
  createUser?: Maybe<IResult>;
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

export type IQuery = {
  __typename?: 'Query';
  fetchMe: IUserProfile;
};

export type IResult = {
  __typename?: 'Result';
  message: Scalars['String'];
};

export enum IRole {
  Regular = 'REGULAR',
  Admin = 'ADMIN'
}

export type IToken = {
  __typename?: 'Token';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  accessedAt: Scalars['String'];
  userId: Scalars['String'];
};

export type ITokenModel = {
  __typename?: 'TokenModel';
  accessToken: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: IRole;
};

export type IUserProfile = {
  __typename?: 'UserProfile';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  email: Scalars['String'];
  role: IRole;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
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

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  UserProfile: ResolverTypeWrapper<IUserProfile>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Role: IRole;
  Mutation: ResolverTypeWrapper<{}>;
  TokenModel: ResolverTypeWrapper<ITokenModel>;
  Result: ResolverTypeWrapper<IResult>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Token: ResolverTypeWrapper<IToken>;
  User: ResolverTypeWrapper<IUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Query: {};
  UserProfile: IUserProfile;
  String: Scalars['String'];
  Mutation: {};
  TokenModel: ITokenModel;
  Result: IResult;
  Boolean: Scalars['Boolean'];
  Token: IToken;
  User: IUser;
};

export type IMutationResolvers<ContextType = any, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createAccessToken?: Resolver<Maybe<IResolversTypes['TokenModel']>, ParentType, ContextType, RequireFields<IMutationCreateAccessTokenArgs, 'refreshToken'>>;
  createUser?: Resolver<Maybe<IResolversTypes['Result']>, ParentType, ContextType, RequireFields<IMutationCreateUserArgs, 'email' | 'password'>>;
  loginUser?: Resolver<IResolversTypes['TokenModel'], ParentType, ContextType, RequireFields<IMutationLoginUserArgs, 'email' | 'password'>>;
};

export type IQueryResolvers<ContextType = any, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  fetchMe?: Resolver<IResolversTypes['UserProfile'], ParentType, ContextType>;
};

export type IResultResolvers<ContextType = any, ParentType extends IResolversParentTypes['Result'] = IResolversParentTypes['Result']> = {
  message?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ITokenResolvers<ContextType = any, ParentType extends IResolversParentTypes['Token'] = IResolversParentTypes['Token']> = {
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  accessedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ITokenModelResolvers<ContextType = any, ParentType extends IResolversParentTypes['TokenModel'] = IResolversParentTypes['TokenModel']> = {
  accessToken?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IUserResolvers<ContextType = any, ParentType extends IResolversParentTypes['User'] = IResolversParentTypes['User']> = {
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<IResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IUserProfileResolvers<ContextType = any, ParentType extends IResolversParentTypes['UserProfile'] = IResolversParentTypes['UserProfile']> = {
  id?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<IResolversTypes['Role'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IResolvers<ContextType = any> = {
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  Result?: IResultResolvers<ContextType>;
  Token?: ITokenResolvers<ContextType>;
  TokenModel?: ITokenModelResolvers<ContextType>;
  User?: IUserResolvers<ContextType>;
  UserProfile?: IUserProfileResolvers<ContextType>;
};


