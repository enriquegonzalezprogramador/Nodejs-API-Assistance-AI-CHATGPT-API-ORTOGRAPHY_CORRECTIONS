import { IsInt, IsOptional, IsString } from "class-validator";

export class OrthographyDto {


    readonly prompt: string;

    @IsInt()
    @IsOptional()
    readonly maxTokens?: number;

}