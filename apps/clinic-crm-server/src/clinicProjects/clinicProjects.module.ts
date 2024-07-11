import { Module } from "@nestjs/common";
import { ClinicProjectsModuleBase } from "./base/clinicProjects.module.base";
import { ClinicProjectsService } from "./clinicProjects.service";
import { ClinicProjectsController } from "./clinicProjects.controller";
import { ClinicProjectsResolver } from "./clinicProjects.resolver";

@Module({
  imports: [ClinicProjectsModuleBase],
  controllers: [ClinicProjectsController],
  providers: [ClinicProjectsService, ClinicProjectsResolver],
  exports: [ClinicProjectsService],
})
export class ClinicProjectsModule {}
