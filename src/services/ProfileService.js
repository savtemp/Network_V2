import { AppState } from "../AppState";
import { api } from "./AxiosService";

class ProfileService {
  async getProfileById(id) {
    let res = await api.get(`api/profiles/${id}`);
    console.log("[GETTING PROFILE BY ID]", res.data);
    AppState.activeProfile = res.data;
  }

  // FIXME Will not change pages on profile page, will show the correct page number on a profile, but will keep that number of pages when navigating back to the home page
  async getPostsById(id) {
    let res = await api.get(`api/profiles/${id}/posts`);
    console.log("[PROFILE POSTS]", res.data.posts);
  
    AppState.profilePosts = res.data.posts;

    AppState.page = res.data.page
    AppState.totalPages = res.data.totalPages
    AppState.newerPage = res.data.newer
    AppState.olderPage = res.data.older
  }

  clearAppState(){
    AppState.activeProfile = null
    AppState.profilePosts = []
  }
}

export const profileService = new ProfileService();
