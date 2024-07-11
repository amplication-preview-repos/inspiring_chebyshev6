import { DrawingsWhereInput } from "./DrawingsWhereInput";
import { DrawingsOrderByInput } from "./DrawingsOrderByInput";

export type DrawingsFindManyArgs = {
  where?: DrawingsWhereInput;
  orderBy?: Array<DrawingsOrderByInput>;
  skip?: number;
  take?: number;
};
