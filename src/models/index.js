// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';
import Amplify from 'aws-amplify';
import awsConfig from '../aws-exports'

Amplify.configure(awsConfig);

const { Post } = initSchema(schema);

export {
  Post
};