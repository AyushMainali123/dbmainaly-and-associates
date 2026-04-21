import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const s3Bucket = process.env.S3_BUCKET;
const s3Region = process.env.S3_REGION;

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
  {
    protocol: 'http',
    hostname: 'localhost',
    port: '3000',
    pathname: '/api/media/file/**',
  },
];

if (s3Bucket && s3Region) {
  remotePatterns.push({
    protocol: 'https',
    hostname: `${s3Bucket}.s3.${s3Region}.amazonaws.com`,
    pathname: '/**',
  });
}

if (s3Region) {
  remotePatterns.push({
    protocol: 'https',
    hostname: `**.s3.${s3Region}.amazonaws.com`,
    pathname: '/**',
  });
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
};

export default withPayload(nextConfig);