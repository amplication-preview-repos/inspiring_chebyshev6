import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExistingClinicsServiceBase } from "./base/existingClinics.service.base";

@Injectable()
export class ExistingClinicsService extends ExistingClinicsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
