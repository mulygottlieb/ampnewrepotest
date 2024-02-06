import { Customer } from "../customer/Customer";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  std: string | null;
  customer?: Customer | null;
};
