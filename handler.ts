import { APIGatewayProxyHandler } from 'aws-lambda';
import mongoose from 'mongoose'

console.log(mongoose)

export const hello: APIGatewayProxyHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };
}
