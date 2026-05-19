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

const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL;

const s3Domains: string[] = [];
if (s3Bucket && s3Region) {
  s3Domains.push(`https://${s3Bucket}.s3.${s3Region}.amazonaws.com`);
}
if (s3Region) {
  s3Domains.push(`https://*.s3.${s3Region}.amazonaws.com`);
}

const connectSources = ["'self'", "ws:", "wss:"];
if (payloadUrl) {
  connectSources.push(payloadUrl);
}

const imgSources = ["'self'", "blob:", "data:", "https://raw.githubusercontent.com", "https://lh3.googleusercontent.com", ...s3Domains];
if (payloadUrl) {
  imgSources.push(payloadUrl);
}

const cspHeaderValue = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  `img-src ${imgSources.join(" ")}`,
  "font-src 'self' data:",
  `connect-src ${connectSources.join(" ")}`,
  "frame-src 'self' https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests"
].join("; ");

const nextConfig: NextConfig = {
  images: {
    remotePatterns,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: cspHeaderValue,
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default withPayload(nextConfig);