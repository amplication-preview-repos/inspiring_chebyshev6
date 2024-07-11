import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClinicProjectsServiceBase } from "./base/clinicProjects.service.base";

@Injectable()
export class ClinicProjectsService extends ClinicProjectsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
