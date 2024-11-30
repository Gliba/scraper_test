import { Inject, Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { Config } from './dto/config.dto';
import { ProductsService } from 'src/products/products.service';
import { ProductDto } from 'src/products/dto/product.dto';

@Injectable()
export class ScraperService {
  @Inject(ProductsService)
  private readonly productsService: ProductsService;

  async execute(config: Config) {
    console.log('Scraping started');

    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
      executablePath: '/usr/bin/google-chrome',
      args: ['--no-sandbox'],
    });

    // define number of products to save from store
    const number_of_products = 10;

    try {
      const page = await browser.newPage();

      page.setDefaultNavigationTimeout(2 * 60 * 1000);
      await Promise.all([
        page.waitForNetworkIdle(),

        // passing link to store to scrape

        page.goto('https://www.shoppster.rs/c/F04'),
      ]);

      // scrap product urls

      const urls = await page.$$eval('ung-product-grid-item', (els) =>
        els.map((e) => e.querySelector('a').href),
      );

      await page.close();

      // loop over urls

      for (let i = 0; i < number_of_products; i++) {
        let product_page = await browser.newPage();
        const url = urls[i];
        await product_page.goto(`${url}`);
        await product_page.waitForNavigation({ waitUntil: 'networkidle2' });

        // give some feedback in console

        console.log(`scraping ${url}`);

        // get product details

        const page_details: ProductDto = await product_page.$eval(
          'ung-product-details-desktop',
          (el) => {
            return {
              name: el.querySelector('h1').textContent,
              description: el.querySelector(
                '.product-short-description__description',
              ).textContent,
              price: parseFloat(
                el.querySelector('.price__value--normal').textContent,
              ),
              image: el.querySelector('ung-product-images').querySelector('img')
                .src,
            };
          },
        );

        // save product to db

        await this.productsService.createProduct(page_details);

        await product_page.close();

        // give feedbac on finish

        if (number_of_products == i + 1) console.log(`Scraping finished`);
      }

      return 1;
    } catch (error) {
      console.log(error);
    } finally {
      await browser.close();
    }
  }
}
