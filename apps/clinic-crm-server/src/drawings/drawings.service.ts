import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DrawingsServiceBase } from "./base/drawings.service.base";

@Injectable()
export class DrawingsService extends DrawingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
