# aws-cdk-file-storage-s3-cloudfront
Sample AWS application which uses CDK with TypeScript. The application is File Storage Solution which uses CloudFront to efficiently upload & cache files to a S3 storage.


## Description

It creates a CDK app with an instance of a stack (`File-Storage-App`).


## Account setup
Before deploying the stack make sure AWS credentials are setup correctly. Below commands setup AWS environment. or run `aws configure` for environment setup.

On the CLI set these environment variables
 * `export AWS_DEFAULT_REGION={aws-region}`
 * `export AWS_ACCESS_KEY_ID={access-key}`
 * `export AWS_SECRET_ACCESS_KEY={secret-key}`

## Deploying the stack

 * `npm install`     install the dependencies
 * `npm run build`   compile typescript to js
 * `cdk deploy`      deploy this stack to your default AWS account/region

After the stack is deployed

## Test the application

Once the application is deployed
 