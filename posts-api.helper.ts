import type { APIRequestContext, APIResponse } from '@playwright/test';

export interface PostPayload {
  userId: number;
  title: string;
  body: string;
}

export class PostsApiHelper {
  constructor(private readonly request: APIRequestContext) {}

  getPost(postId: number): Promise<APIResponse> {
    return this.request.get(`/posts/${postId}`);
  }

  createPost(post: PostPayload): Promise<APIResponse> {
    return this.request.post('/posts', { data: post });
  }
}
