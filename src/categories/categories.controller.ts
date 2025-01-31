import { Body, Controller, Delete, Post } from "@nestjs/common";
import { CategoryDto } from "./dto/category.dto";
import { CategoryService } from "./categories.service";

@Controller('category')
export class TransactionController {
  constructor(private categoryService: CategoryService) {}

  @Post('create')
  createCategory(@Body() transactionDto: CategoryDto) {
    return this.categoryService.createCategory(transactionDto);
  }

  @Delete('delete')
  deleteCategory(@Body('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
} 
