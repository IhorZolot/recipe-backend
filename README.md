# Recipe Backend

Це простий бекенд на Express, який виступає проксі до TheMealDB API, щоб отримувати дані про рецепти, категорії, інгредієнти та кухні.

- [Recipe Backend](https://e-pharmacy-tan.vercel.app)

### Встановлення
##### Клонування репозиторію:
```bash
git clone https://github.com/your-repository/Recipe Backend.git
cd Recipe Backend
```
##### Встановлення залежностей
```bash
npm install
```
##### Запуск у режимі розробки
```bash
npm run dev
```

##### Білд і продакшн-запуск
```bash
npm run build
npm start
```
### Структура проєкту

/src
 ├── index.ts          ← основний сервер Express
 ├── filtersRouter.ts  ← маршрути для фільтрів (інгредієнти, категорії, кухні)
 └── recipesRouter.ts  ← маршрути для рецептів (пошук, деталі)

### API Ендпоінти
##### Filters
GET /filters/ingredients → список інгредієнтів
GET /filters/areas → список кухонь
GET /filters/categories → список категорій
##### Recipes
GET /recipes → список рецептів
#### Параметри запиту (query):
ingredient
area
category
GET /recipes/:id → деталі рецепта за id

### Залежності

express
axios
cors
typescript
nodemon

[Ihor Zolotoverkh](https://www.linkedin.com/in/ihor-zolotoverkh)