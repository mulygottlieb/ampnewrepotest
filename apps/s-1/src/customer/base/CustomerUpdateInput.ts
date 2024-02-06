/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostUpdateManyWithoutCustomersInput } from "./PostUpdateManyWithoutCustomersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PostUpdateManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => PostUpdateManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => PostUpdateManyWithoutCustomersInput, {
    nullable: true,
  })
  posts?: PostUpdateManyWithoutCustomersInput;
}

export { CustomerUpdateInput as CustomerUpdateInput };
