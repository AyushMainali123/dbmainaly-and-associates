import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { s3Storage } from '@payloadcms/storage-s3'
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Author } from "./collections/Author";
import { Blog } from "./collections/Blog";
import { BlogCategory } from "./collections/BlogCategory";

import { ResourcePage } from "./globals/ResourcePage";
import { ServicePage } from "./globals/ServicePage";
import { AboutPage } from "./globals/AboutPage";
import { HomePage } from "./globals/HomePage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const getRequiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not defined`);
  }
  return value;
};

const s3Bucket = process.env.S3_BUCKET;
const s3Region = getRequiredEnv("S3_REGION");

if (!s3Bucket) {
  throw new Error(
    "S3 bucket is not defined. Set one of: S3_BUCKET, S3_BUCKET_NAME, AWS_BUCKET_NAME, AWS_S3_BUCKET.",
  );
}
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Author, BlogCategory, Blog],
  globals: [ResourcePage, ServicePage, AboutPage, HomePage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  serverURL: getRequiredEnv("NEXT_PUBLIC_PAYLOAD_URL"),
  cors: [getRequiredEnv("NEXT_PUBLIC_PAYLOAD_URL")],
  plugins: [
    s3Storage({
      collections: {
        media: {
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) => {
            const encodedFilename = encodeURIComponent(filename);
            const key = prefix ? `${prefix}/${encodedFilename}` : encodedFilename;

            return `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/${key}`;
          },
        },
      },
      bucket: s3Bucket,
      disableLocalStorage: true,
      config: {
        credentials: {
          accessKeyId: getRequiredEnv("S3_ACCESS_KEY_ID"),
          secretAccessKey: getRequiredEnv("S3_SECRET_ACCESS_KEY"),
        },
        region: s3Region,
      },

    }),
  ],
});
