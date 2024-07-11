import { Module } from "@nestjs/common";
import { DrawingsModuleBase } from "./base/drawings.module.base";
import { DrawingsService } from "./drawings.service";
import { DrawingsController } from "./drawings.controller";
import { DrawingsResolver } from "./drawings.resolver";

@Module({
  imports: [DrawingsModuleBase],
  controllers: [DrawingsController],
  providers: [DrawingsService, DrawingsResolver],
  exports: [DrawingsService],
})
export class DrawingsModule {}
