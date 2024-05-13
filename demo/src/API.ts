/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActionCounterInput = {
  id?: string | null,
  count?: number | null,
};

export type ModelActionCounterConditionInput = {
  count?: ModelIntInput | null,
  and?: Array< ModelActionCounterConditionInput | null > | null,
  or?: Array< ModelActionCounterConditionInput | null > | null,
  not?: ModelActionCounterConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ActionCounter = {
  __typename: "ActionCounter",
  id: string,
  count?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateActionCounterInput = {
  id: string,
  count?: number | null,
};

export type DeleteActionCounterInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  text?: string | null,
  published?: boolean | null,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  text?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Article = {
  __typename: "Article",
  id: string,
  title?: string | null,
  description?: string | null,
  text?: string | null,
  published?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  text?: string | null,
  published?: boolean | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type ModelActionCounterFilterInput = {
  id?: ModelIDInput | null,
  count?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelActionCounterFilterInput | null > | null,
  or?: Array< ModelActionCounterFilterInput | null > | null,
  not?: ModelActionCounterFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelActionCounterConnection = {
  __typename: "ModelActionCounterConnection",
  items:  Array<ActionCounter | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  text?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionActionCounterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  count?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActionCounterFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionCounterFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionArticleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  published?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateActionCounterMutationVariables = {
  input: CreateActionCounterInput,
  condition?: ModelActionCounterConditionInput | null,
};

export type CreateActionCounterMutation = {
  createActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActionCounterMutationVariables = {
  input: UpdateActionCounterInput,
  condition?: ModelActionCounterConditionInput | null,
};

export type UpdateActionCounterMutation = {
  updateActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActionCounterMutationVariables = {
  input: DeleteActionCounterInput,
  condition?: ModelActionCounterConditionInput | null,
};

export type DeleteActionCounterMutation = {
  deleteActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    published?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    published?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    published?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetActionCounterQueryVariables = {
  id: string,
};

export type GetActionCounterQuery = {
  getActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActionCountersQueryVariables = {
  filter?: ModelActionCounterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionCountersQuery = {
  listActionCounters?:  {
    __typename: "ModelActionCounterConnection",
    items:  Array< {
      __typename: "ActionCounter",
      id: string,
      count?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    published?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title?: string | null,
      description?: string | null,
      text?: string | null,
      published?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateActionCounterSubscriptionVariables = {
  filter?: ModelSubscriptionActionCounterFilterInput | null,
};

export type OnCreateActionCounterSubscription = {
  onCreateActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActionCounterSubscriptionVariables = {
  filter?: ModelSubscriptionActionCounterFilterInput | null,
};

export type OnUpdateActionCounterSubscription = {
  onUpdateActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActionCounterSubscriptionVariables = {
  filter?: ModelSubscriptionActionCounterFilterInput | null,
};

export type OnDeleteActionCounterSubscription = {
  onDeleteActionCounter?:  {
    __typename: "ActionCounter",
    id: string,
    count?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    published?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    published?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title?: string | null,
    description?: string | null,
    text?: string | null,
    published?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
