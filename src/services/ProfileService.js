import { AppState } from "../AppState";
import { api } from "./AxiosService";

class ProfileService {
  async getProfileById(id) {
    let res = await api.get(`api/profiles/${id}`);
    console.log("[GETTING PROFILE BY ID]", res.data);
    AppState.activeProfile = res.data;
  }

  async getPostsById(id) {
    let res = await api.get(`api/profiles/${id}/posts`);
    console.log("[PROFILE POSTS]", res.data.posts);
    AppState.profilePost = res.data.posts;
  }
}

export const profileService = new ProfileService();
