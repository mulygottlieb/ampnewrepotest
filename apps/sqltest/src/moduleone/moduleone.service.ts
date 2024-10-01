import { Injectable } from "@nestjs/common";
import { MyDto } from "../moduleOne/MyDto";

@Injectable()
export class ModuleOneService {
  constructor() {}
  async MyAction(args: MyDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
