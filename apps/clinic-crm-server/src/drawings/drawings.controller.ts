import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DrawingsService } from "./drawings.service";
import { DrawingsControllerBase } from "./base/drawings.controller.base";

@swagger.ApiTags("drawings")
@common.Controller("drawings")
export class DrawingsController extends DrawingsControllerBase {
  constructor(protected readonly service: DrawingsService) {
    super(service);
  }
}
