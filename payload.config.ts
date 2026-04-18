import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Author } from "./collections/Author";
import { Blog } from "./collections/Blog";
import { BlogCategory } from "./collections/BlogCategory";

import { ResourcePage } from "./globals/ResourcePage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


if (!process.env.NEXT_PUBLIC_PAYLOAD_URL) {
  throw new Error("NEXT_PUBLIC_PAYLOAD_URL is not defined");
}
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Author, BlogCategory, Blog],
  globals: [ResourcePage],
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
  plugins: [],
  serverURL: process.env.NEXT_PUBLIC_PAYLOAD_URL,
  cors: [process.env.NEXT_PUBLIC_PAYLOAD_URL]
});
