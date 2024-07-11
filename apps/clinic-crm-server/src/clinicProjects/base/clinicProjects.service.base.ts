/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ClinicProjects as PrismaClinicProjects } from "@prisma/client";

export class ClinicProjectsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ClinicProjectsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.clinicProjects.count(args);
  }

  async clinicProjectsItems(
    args: Prisma.ClinicProjectsFindManyArgs
  ): Promise<PrismaClinicProjects[]> {
    return this.prisma.clinicProjects.findMany(args);
  }
  async clinicProjects(
    args: Prisma.ClinicProjectsFindUniqueArgs
  ): Promise<PrismaClinicProjects | null> {
    return this.prisma.clinicProjects.findUnique(args);
  }
  async createClinicProjects(
    args: Prisma.ClinicProjectsCreateArgs
  ): Promise<PrismaClinicProjects> {
    return this.prisma.clinicProjects.create(args);
  }
  async updateClinicProjects(
    args: Prisma.ClinicProjectsUpdateArgs
  ): Promise<PrismaClinicProjects> {
    return this.prisma.clinicProjects.update(args);
  }
  async deleteClinicProjects(
    args: Prisma.ClinicProjectsDeleteArgs
  ): Promise<PrismaClinicProjects> {
    return this.prisma.clinicProjects.delete(args);
  }
}
