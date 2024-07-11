import * as graphql from "@nestjs/graphql";
import { ExistingClinicsResolverBase } from "./base/existingClinics.resolver.base";
import { ExistingClinics } from "./base/ExistingClinics";
import { ExistingClinicsService } from "./existingClinics.service";

@graphql.Resolver(() => ExistingClinics)
export class ExistingClinicsResolver extends ExistingClinicsResolverBase {
  constructor(protected readonly service: ExistingClinicsService) {
    super(service);
  }
}
