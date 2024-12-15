import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ModuleOneService } from "./moduleone.service";
import { MyDto } from "../moduleOne/MyDto";

@swagger.ApiTags("moduleOnes")
@common.Controller("moduleOnes")
export class ModuleOneController {
  constructor(protected readonly service: ModuleOneService) {}

  @common.Get("/:id/my-action")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MyAction(
    @common.Body()
    body: MyDto
  ): Promise<string> {
        return this.service.MyAction(body);
      }
}
