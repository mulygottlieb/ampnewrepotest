import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PostCreateInput = {
  title: string;
  std?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
