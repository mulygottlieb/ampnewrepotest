import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntService } from "./ent.service";
import { EntControllerBase } from "./base/ent.controller.base";

@swagger.ApiTags("ents")
@common.Controller("ents")
export class EntController extends EntControllerBase {
  constructor(protected readonly service: EntService) {
    super(service);
  }
}
