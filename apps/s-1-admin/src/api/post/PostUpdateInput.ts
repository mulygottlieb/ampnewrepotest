import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PostUpdateInput = {
  title?: string;
  std?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
