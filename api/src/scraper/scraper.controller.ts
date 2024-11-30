import { Body, Controller, Get, Post } from '@nestjs/common';
import { Config } from './dto/config.dto';
import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get()
  findAll() {
    return [];
  }

  @Post()
  create(@Body() config: Config) {
    return this.scraperService.execute(config);
  }
}
