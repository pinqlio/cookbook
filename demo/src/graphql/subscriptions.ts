/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateActionCounter = /* GraphQL */ `subscription OnCreateActionCounter(
  $filter: ModelSubscriptionActionCounterFilterInput
) {
  onCreateActionCounter(filter: $filter) {
    id
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActionCounterSubscriptionVariables,
  APITypes.OnCreateActionCounterSubscription
>;
export const onUpdateActionCounter = /* GraphQL */ `subscription OnUpdateActionCounter(
  $filter: ModelSubscriptionActionCounterFilterInput
) {
  onUpdateActionCounter(filter: $filter) {
    id
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActionCounterSubscriptionVariables,
  APITypes.OnUpdateActionCounterSubscription
>;
export const onDeleteActionCounter = /* GraphQL */ `subscription OnDeleteActionCounter(
  $filter: ModelSubscriptionActionCounterFilterInput
) {
  onDeleteActionCounter(filter: $filter) {
    id
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActionCounterSubscriptionVariables,
  APITypes.OnDeleteActionCounterSubscription
>;
export const onCreateArticle = /* GraphQL */ `subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onCreateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArticleSubscriptionVariables,
  APITypes.OnCreateArticleSubscription
>;
export const onUpdateArticle = /* GraphQL */ `subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
  onUpdateArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArticleSubscriptionVariables,
  APITypes.OnUpdateArticleSubscription
>;
export const onDeleteArticle = /* GraphQL */ `subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
  onDeleteArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArticleSubscriptionVariables,
  APITypes.OnDeleteArticleSubscription
>;
