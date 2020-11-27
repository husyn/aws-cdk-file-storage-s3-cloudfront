#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { InfraStack } from './infra-stack';

import config from './config.json';

const app = new cdk.App();
new InfraStack(app, 'InfraStack', {
    stackName: `${config.PROJECT_NAME}-Stack`    
});
