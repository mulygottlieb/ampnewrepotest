import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
class MyDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    p1!: string;

    @Field(() => GraphQLJSON)
    p2!: InputJsonValue;
}

export { MyDto as MyDto };