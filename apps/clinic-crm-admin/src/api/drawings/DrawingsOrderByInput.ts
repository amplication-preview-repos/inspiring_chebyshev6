import { SortOrder } from "../../util/SortOrder";

export type DrawingsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  drawing?: SortOrder;
};
