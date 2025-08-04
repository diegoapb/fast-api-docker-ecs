#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { FastApiDockerEcsStack } from '../lib/fast-api-docker-ecs-stack';

const app = new cdk.App();
new FastApiDockerEcsStack(app, 'FastApiDockerEcsStack', {

});