import { Post } from "../post/Post";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  posts?: Array<Post>;
};
