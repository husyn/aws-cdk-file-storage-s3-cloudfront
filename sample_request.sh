curl --location --request PUT 'https://d34zp75h3fxwfm.cloudfront.net/documents/file1' \
--header 'x-amz-acl: bucket-owner-full-control' \
--header 'x-amz-content-sha256: UNSIGNED-PAYLOAD' \
--header 'Content-Type: application/octet-stream' \
--data-binary 'test text'



curl --upload-file "/test.txt" "d34zp75h3fxwfm.cloudfront.net" \
-H "x-amz-content-sha256: UNSIGNED-PAYLOAD" \
-H "x-amz-acl: bucket-owner-full-control"