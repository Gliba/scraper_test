# Scraper TEST project

## Folder structure

```
 ┣ 📂db
 ┃ ┣ 📜00-create-db.sql
 ┃ ┗ 📜01-create-table-products.sql
 ┣ 📂api
 ┃ ┣ 📂node_modules
 ┃ ┣ 📂src
 ┃ ┣ ┣ 📂entities
 ┃ ┣ ┣ 📂products
 ┃ ┣ ┣ 📂scraper
 ┃ ┃ ┣ 📜app.module.ts
 ┃ ┃ ┣ 📜app.controler.ts
 ┃ ┃ ┣ 📜app.service.ts
 ┃ ┃ ┗ 📜main.ts
 ┃ ┣ 📂test
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜package.json
 ┃ ┗ 📜tsconfig.json
 ┣ 📂frontend
 ┃ ┣ 📂node_modules
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┣ 📜App.tsx
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜main.tsx
 ┃ ┣ 📂public
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜components.json
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜package.json
 ┃ ┣ 📜postcss.config.js
 ┃ ┣ 📜tailwind.config.ts
 ┃ ┣ 📜tsconfig.node.json
 ┃ ┗ 📜vite.config.ts
 ┣ 📜.env
 ┣ 📜docker-compose.yml
 ┗ 📜.prettierrc
```

## Run everything together

Run `docker-compose up`

By default project is runing frontent on port 3000 and api on port 3001
