import { Module } from "@nestjs/common";
import { ModuleOneService } from "./moduleone.service";
import { ModuleOneController } from "./moduleone.controller";
import { ModuleOneResolver } from "./moduleone.resolver";

@Module({
  controllers: [ModuleOneController],
  providers: [ModuleOneService, ModuleOneResolver],
  exports: [ModuleOneService],
})
export class ModuleOneModule {}
