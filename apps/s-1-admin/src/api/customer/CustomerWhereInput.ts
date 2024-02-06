import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  posts?: PostListRelationFilter;
};
