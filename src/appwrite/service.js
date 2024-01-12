import { ID, Query } from "appwrite";

import { appwriteConfig, databases, storage } from "@/config";

class Service {
  // GET MOVIES
  async getMovies(queries = [Query.limit(10), Query.offset(0)]) {
    try {
      return await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.feedCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive(GET POSTS): ERROR", error);
      return false;
    }
  }
}

const appwriteService = new Service();

export default appwriteService;
