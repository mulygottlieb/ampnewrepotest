import { Module } from "@nestjs/common";
import { EntModuleBase } from "./base/ent.module.base";
import { EntService } from "./ent.service";
import { EntController } from "./ent.controller";
import { EntResolver } from "./ent.resolver";

@Module({
  imports: [EntModuleBase],
  controllers: [EntController],
  providers: [EntService, EntResolver],
  exports: [EntService],
})
export class EntModule {}
