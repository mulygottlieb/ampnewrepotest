import * as graphql from "@nestjs/graphql";
import { EntResolverBase } from "./base/ent.resolver.base";
import { Ent } from "./base/Ent";
import { EntService } from "./ent.service";

@graphql.Resolver(() => Ent)
export class EntResolver extends EntResolverBase {
  constructor(protected readonly service: EntService) {
    super(service);
  }
}
