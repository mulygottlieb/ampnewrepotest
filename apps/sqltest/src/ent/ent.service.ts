import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntServiceBase } from "./base/ent.service.base";

@Injectable()
export class EntService extends EntServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
