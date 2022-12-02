import { AppState } from "../AppState";
import { api, heroku } from "./AxiosService";

class PostsService {
  async getById(postId) {
    const res = await heroku.get(`posts/${postId}`);
  }
  async getAll() {
    const res = await heroku.get("posts");
    console.log("[POSTS]", res.data);
    AppState.posts = res.data;
  }

  async create(postData) {
    const res = await heroku.post("posts", postData);
    console.log("[CREATED POST]", res.data);
  }

  async createLike(postId) {
    const res = await heroku.post(`posts/${postId}/like`);
    console.log("[CREATED LIKE]", res.data);
  }

  async delete(postId) {
    const res = await heroku.delete(`posts/${postId}`);
    console.log("[DELETING POST]", res.data);
  }

  async edit(postId, postData) {
    const res = await heroku.put(`posts/${postId}`, postData);
    console.log("[EDITED POST]", res.data);
  }
}

export const postsService = new PostsService();
