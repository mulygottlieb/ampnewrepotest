import * as graphql from "@nestjs/graphql";
import { MyDto } from "../moduleOne/MyDto";
import { ModuleOneService } from "./moduleone.service";

export class ModuleOneResolver {
  constructor(protected readonly service: ModuleOneService) {}

  @graphql.Query(() => String)
  async MyAction(
    @graphql.Args()
    args: MyDto
  ): Promise<string> {
    return this.service.MyAction(args);
  }
}
