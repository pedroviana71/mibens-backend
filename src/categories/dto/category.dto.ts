import {
    IsMongoId,
    IsNotEmpty,
    MaxLength,
  } from 'class-validator';
  
  export class CategoryDto {
    
    @IsNotEmpty()
    @IsMongoId()
    @MaxLength(55)
    name: string;

    @IsNotEmpty()
    @IsMongoId()
    userId: string;
  
    createdAt: Date;
  
    updatedAt: Date;
  }
  