import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryRepository } from './categories.repository';


@Injectable()
export class CategoryService {
  constructor(private transactionRepository: CategoryRepository) {}

  createCategory(transactionDto: CategoryDto) {
    const accounting = this.transactionRepository.create(transactionDto);

    return accounting;
  }

  deleteCategory(id: string) {
    return this.transactionRepository.delete(id);
  }
}
