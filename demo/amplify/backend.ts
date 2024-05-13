import { defineBackend } from "@aws-amplify/backend";
import * as iam from "aws-cdk-lib/aws-iam";
import * as sns from "aws-cdk-lib/aws-sns";
import { weeklyDigest } from "./functions/weekly-digest/resource";

const backend = defineBackend({
  weeklyDigest,
});

const weeklyDigestLambda = backend.weeklyDigest.resources.lambda;

const topicStack = backend.createStack("WeeklyDigest");
const topic = new sns.Topic(topicStack, "Topic", {
  displayName: "digest",
});

topic.grantPublish(weeklyDigestLambda);
