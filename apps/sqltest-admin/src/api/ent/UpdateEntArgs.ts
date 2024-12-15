import { EntWhereUniqueInput } from "./EntWhereUniqueInput";
import { EntUpdateInput } from "./EntUpdateInput";

export type UpdateEntArgs = {
  where: EntWhereUniqueInput;
  data: EntUpdateInput;
};
