import { AppState } from "../AppState";
import { heroku } from "./AxiosService";

class ProfileService {
  async getProfileById(id) {
    let res = await heroku.get(`profiles/${id}`);
    console.log("[GETTING PROFILE BY ID]", res.data);
    AppState.activeProfile = res.data;
  }

  async getPostsById(id) {
    let res = await heroku.get(`profiles/${id}/posts`);
    console.log("[PROFILE POSTS]", res.data.posts);
    AppState.profilePost = res.data.posts;
  }
}

export const profileService = new ProfileService();
