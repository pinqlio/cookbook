/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createActionCounter = /* GraphQL */ `mutation CreateActionCounter(
  $input: CreateActionCounterInput!
  $condition: ModelActionCounterConditionInput
) {
  createActionCounter(input: $input, condition: $condition) {
    id
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActionCounterMutationVariables,
  APITypes.CreateActionCounterMutation
>;
export const updateActionCounter = /* GraphQL */ `mutation UpdateActionCounter(
  $input: UpdateActionCounterInput!
  $condition: ModelActionCounterConditionInput
) {
  updateActionCounter(input: $input, condition: $condition) {
    id
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActionCounterMutationVariables,
  APITypes.UpdateActionCounterMutation
>;
export const deleteActionCounter = /* GraphQL */ `mutation DeleteActionCounter(
  $input: DeleteActionCounterInput!
  $condition: ModelActionCounterConditionInput
) {
  deleteActionCounter(input: $input, condition: $condition) {
    id
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActionCounterMutationVariables,
  APITypes.DeleteActionCounterMutation
>;
export const createArticle = /* GraphQL */ `mutation CreateArticle(
  $input: CreateArticleInput!
  $condition: ModelArticleConditionInput
) {
  createArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArticleMutationVariables,
  APITypes.CreateArticleMutation
>;
export const updateArticle = /* GraphQL */ `mutation UpdateArticle(
  $input: UpdateArticleInput!
  $condition: ModelArticleConditionInput
) {
  updateArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArticleMutationVariables,
  APITypes.UpdateArticleMutation
>;
export const deleteArticle = /* GraphQL */ `mutation DeleteArticle(
  $input: DeleteArticleInput!
  $condition: ModelArticleConditionInput
) {
  deleteArticle(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArticleMutationVariables,
  APITypes.DeleteArticleMutation
>;
