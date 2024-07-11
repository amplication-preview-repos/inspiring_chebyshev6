import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClinicProjectsService } from "./clinicProjects.service";
import { ClinicProjectsControllerBase } from "./base/clinicProjects.controller.base";

@swagger.ApiTags("clinicProjects")
@common.Controller("clinicProjects")
export class ClinicProjectsController extends ClinicProjectsControllerBase {
  constructor(protected readonly service: ClinicProjectsService) {
    super(service);
  }
}
