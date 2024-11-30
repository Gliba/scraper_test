import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  getProducts() {
    return this.productRepo.find();
  }

  createProduct(productData: ProductDto) {
    const newProduct = this.productRepo.create({
      ...productData,
      created_on: new Date(),
    });

    return this.productRepo.save(newProduct);
  }
}
