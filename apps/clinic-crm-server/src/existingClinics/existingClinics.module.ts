import { Module } from "@nestjs/common";
import { ExistingClinicsModuleBase } from "./base/existingClinics.module.base";
import { ExistingClinicsService } from "./existingClinics.service";
import { ExistingClinicsController } from "./existingClinics.controller";
import { ExistingClinicsResolver } from "./existingClinics.resolver";

@Module({
  imports: [ExistingClinicsModuleBase],
  controllers: [ExistingClinicsController],
  providers: [ExistingClinicsService, ExistingClinicsResolver],
  exports: [ExistingClinicsService],
})
export class ExistingClinicsModule {}
