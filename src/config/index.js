import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  url: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
  feedCollectionId: process.env.NEXT_PUBLIC_APPWRITE_MOVIES_COLLECTION_ID,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
};

export const appwriteClient = new Client();

appwriteClient.setEndpoint(appwriteConfig.url);
appwriteClient.setProject(appwriteConfig.projectId);

export const account = new Account(appwriteClient);
export const databases = new Databases(appwriteClient);
export const storage = new Storage(appwriteClient);
