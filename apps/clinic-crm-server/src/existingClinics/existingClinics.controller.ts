import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExistingClinicsService } from "./existingClinics.service";
import { ExistingClinicsControllerBase } from "./base/existingClinics.controller.base";

@swagger.ApiTags("existingClinics")
@common.Controller("existingClinics")
export class ExistingClinicsController extends ExistingClinicsControllerBase {
  constructor(protected readonly service: ExistingClinicsService) {
    super(service);
  }
}
