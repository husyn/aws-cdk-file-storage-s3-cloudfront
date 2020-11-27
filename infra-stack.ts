import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as cf from '@aws-cdk/aws-cloudfront';
import { OriginAccessIdentity, CloudFrontWebDistribution } from '@aws-cdk/aws-cloudfront';
import { Bucket } from '@aws-cdk/aws-s3';

import config from './config.json';

export class InfraStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket_documents_datasource:Bucket = new s3.Bucket(this, 'documents-storage-bucket', {
      bucketName: `${config.PROJECT_NAME}-bucket`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL
    });    
    new cdk.CfnOutput(this, 'Bucket', { value: s3Bucket_documents_datasource.bucketName });

    const oai: OriginAccessIdentity = new OriginAccessIdentity(this, 'document-access-oai');
    s3Bucket_documents_datasource.grantReadWrite(oai);

    const distribution:CloudFrontWebDistribution = new cf.CloudFrontWebDistribution(this, 'document-cloudfront', {
      priceClass: cf.PriceClass.PRICE_CLASS_ALL,
      comment: 'CDN to download and access docs from S3',
      httpVersion:cf.HttpVersion.HTTP2,
      viewerProtocolPolicy:cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: s3Bucket_documents_datasource,
            originAccessIdentity: oai
          },
          behaviors: [
            { 
              isDefaultBehavior: true, 
              allowedMethods: cf.CloudFrontAllowedMethods.ALL
            }
          ]
        }
      ]
    });
    new cdk.CfnOutput(this, 'Distribution URL', {value: distribution.domainName});

  }
}
