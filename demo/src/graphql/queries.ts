/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getActionCounter = /* GraphQL */ `query GetActionCounter($id: ID!) {
  getActionCounter(id: $id) {
    id
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActionCounterQueryVariables,
  APITypes.GetActionCounterQuery
>;
export const listActionCounters = /* GraphQL */ `query ListActionCounters(
  $filter: ModelActionCounterFilterInput
  $limit: Int
  $nextToken: String
) {
  listActionCounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      count
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActionCountersQueryVariables,
  APITypes.ListActionCountersQuery
>;
export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    id
    title
    description
    text
    published
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      text
      published
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
