# File Storage App on AWS CDK, S3 and CloudFront
This is a sample AWS application which uses AWS CDK to generate Infrastucture with TypeScript runtime. The application is File Storage solution which uses CloudFront to efficiently upload & cache files to and from a S3 storage. It creates a CDK app with an instance of a CloudFormation stack named `config.PROJECT_NAME-Stack`. Related blogpost can be found [here](https://ihusyn.wordpress.com/2020/08/05/file-storage-solution-on-aws-cloud/)


# Getting Started

## AWS Account Setup
Before deploying the stack make sure AWS credentials are setup correctly. Below commands setup AWS environment. or run `aws configure` for environment setup.

On the CLI set these environment variables
 * `export AWS_DEFAULT_REGION={aws-region}`
 * `export AWS_ACCESS_KEY_ID={access-key}`
 * `export AWS_SECRET_ACCESS_KEY={secret-key}`

## Config file
Update the Project name and environment by modifying `config.json` file before deployment

## Deploying the stack

 * `npm install`     install the dependencies
 * `npm run build`   compile typescript to js
 * `cdk deploy`      deploy this stack to your default AWS account/region

After the stack is deployed

## Uploading Files

Once the application is deployed `Distribution URL` will be displayed on the CLI. To upload the file, use the below command with the correct URL:

```curl --upload-file "test.txt" "{Distribution_URL}" -H "x-amz-content-sha256: UNSIGNED-PAYLOAD" -H "x-amz-acl: bucket-owner-full-control" ```

Two headers `x-amz-content-sha256` and `x-amz-acl` are requierd when uploading the file. *To make it Secure, use [Signed URLs]. 

[Signed URLs]:https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-trusted-signers.html

## Downloading Files

Files can be accessed on the same *path* as it was uploaded to. 
`{Distribution_URL}/path/test.txt`


# License

This code is released under the MIT license. See [LICENSE](https://github.com/husyn/aws-cdk-file-storage-s3-cloudfront/blob/master/LICENSE) for details.
