import { PostCreateNestedManyWithoutCustomersInput } from "./PostCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  posts?: PostCreateNestedManyWithoutCustomersInput;
};
