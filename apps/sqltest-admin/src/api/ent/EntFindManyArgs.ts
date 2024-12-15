import { EntWhereInput } from "./EntWhereInput";
import { EntOrderByInput } from "./EntOrderByInput";

export type EntFindManyArgs = {
  where?: EntWhereInput;
  orderBy?: Array<EntOrderByInput>;
  skip?: number;
  take?: number;
};
