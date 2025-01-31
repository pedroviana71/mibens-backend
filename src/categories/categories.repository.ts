import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';
import { GlobalCategory } from './schemas/globalCategory.schema';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<Category>,
    @InjectModel(GlobalCategory.name)
    private globalCategoryModel: Model<GlobalCategory>,
  ) {}

  create(accounting: CategoryDto) {
    // const newAccounting = this.transactionModel.create(accounting);

    // return newAccounting;
  }

  delete(id: string) {
    // return this.transactionModel.findByIdAndDelete(id);
  }
}
