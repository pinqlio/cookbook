import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { env } from '$amplify/env/generate-monthly-reports';

const s3Client = new S3Client();

export const handler = async () => {
  const command = new PutObjectCommand({
    Bucket: env.myReports_BUCKET_NAME,
    Key: `reports/${new Date().toISOString()}.csv`,
    Body: new Blob([''], { type: 'text/csv;charset=utf-8;' })
  });

  await s3Client.send(command);
};