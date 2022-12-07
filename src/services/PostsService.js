import { AppState } from "../AppState";
import { Post } from "../models/Post.js";
import { api } from "./AxiosService";

class PostsService {

  async getById(postId) {
    const res = await api.get(`api/posts/${postId}`);
  }

  async getAll() {
    const res = await api.get(`api/posts`);
    console.log("[POSTS]", res.data);
    
    AppState.posts = res.data.posts;
    AppState.olderPage = res.data.older
    AppState.newerPage = res.data.newer

    AppState.page = res.data.page
    AppState.totalPages = res.data.totalPages
  }

  async create(postData) {
    const res = await api.post(`api/posts`, postData);
    console.log("[CREATED POST]", res.data);
    AppState.posts.unshift(res.data);
  }

  async createLike(postId) {
    // let createdLike = AppState.posts.find(p => p.id == postId)
    
    const res = await api.post(`api/posts/${postId}/like`);
    console.log("[CREATED LIKE]", res.data);
    let likeIndex = AppState.posts.findIndex(p => p.id == postId)
    let likedPost = new Post(res.data)

    AppState.posts.splice(likeIndex, 1, likedPost)
  }

  async delete(postId) {
    const res = await api.delete(`api/posts/${postId}`);
    console.log("[DELETING POST]", res.data);
    AppState.posts = AppState.posts.filter((p) => p.id != postId);
  }

  // TODO come back to this - it was not a requirement for the project
  // async edit(postId, postData) {
  //   const res = await api.put(`api/posts/${postId}`, postData);
  //   console.log("[EDITED POST]", res.data);
  // }

  async queryOnSearchPage(searchTerm){
    const res = await api.get(`api/posts`, {
    params: {query: searchTerm}
    })
    AppState.posts = res.data.posts
  }

   // FIXME Will not change pages on profile page, will show the correct page number on a profile, but will keep that number of pages when navigating back to the home page
  async changePage(url){
    console.log("url", url)
    const res = await api.get(url)

    AppState.posts = res.data.posts
    AppState.profilePosts = res.data.posts
    AppState.olderPage = res.data.older
    AppState.newerPage = res.data.newer

    AppState.page = res.data.page
    AppState.totalPages = res.data.totalPages
  }
}

export const postsService = new PostsService();
