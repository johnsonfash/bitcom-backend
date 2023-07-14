import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PollingUnitDto {
  @IsNotEmpty()
  @IsString()
  pollingUnitId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsArray()
  results: { party: string, score: number }[];
}