import * as graphql from "@nestjs/graphql";
import { DrawingsResolverBase } from "./base/drawings.resolver.base";
import { Drawings } from "./base/Drawings";
import { DrawingsService } from "./drawings.service";

@graphql.Resolver(() => Drawings)
export class DrawingsResolver extends DrawingsResolverBase {
  constructor(protected readonly service: DrawingsService) {
    super(service);
  }
}
