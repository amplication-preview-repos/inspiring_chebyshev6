import * as graphql from "@nestjs/graphql";
import { ClinicProjectsResolverBase } from "./base/clinicProjects.resolver.base";
import { ClinicProjects } from "./base/ClinicProjects";
import { ClinicProjectsService } from "./clinicProjects.service";

@graphql.Resolver(() => ClinicProjects)
export class ClinicProjectsResolver extends ClinicProjectsResolverBase {
  constructor(protected readonly service: ClinicProjectsService) {
    super(service);
  }
}
