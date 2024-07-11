import { DrawingsWhereUniqueInput } from "./DrawingsWhereUniqueInput";
import { DrawingsUpdateInput } from "./DrawingsUpdateInput";

export type UpdateDrawingsArgs = {
  where: DrawingsWhereUniqueInput;
  data: DrawingsUpdateInput;
};
