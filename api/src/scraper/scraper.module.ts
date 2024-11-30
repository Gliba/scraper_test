import { Module } from '@nestjs/common';
import { ScraperController } from './scraper.controller';
import { ScraperService } from './scraper.service';
import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [ScraperController],
  providers: [ScraperService],
  imports: [ProductsModule],
})
export class ScraperModule {}
