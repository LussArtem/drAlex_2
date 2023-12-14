`npm i`
Режим разработчика. Команда запуска `npm run dev`
Режим продакшена. Команда запуска `npm run build`
Режим продакшена и отправка результата на сервер по FTP. Команда запуска `npm run deploy`
Режим продакшена и создание ZIP-архива с результатом. Команда запуска `npm run zip`
Режим продакшена без создания WEBP изображений и действий связанных с этим форматом. Команда запуска `npm run devbuild`
Ручное создание SVG спрайта. Команда запуска `npm run sprite`
Конвертация шрифтов с принудительной перезаписью файла стилей. Команда запуска `npm run fonts`

-   Отправка на gh-pages npm run deployGH

Страница проекта https://lussartem.github.io/drAlex_2/

# invite

Сайт закрытых вечеринок

:white_check_mark: разработка  
:negative_squared_cross_mark: тестирование  
:black_square_button: продакшн

## Содержание

-   [Технологии](#технологии)
-   [Начало работы](#начало-работы)
-   [Тестирование](#тестирование)
-   [Deploy и CI/CD](#deploy-и-ci/cd)
-   [Contributing](#contributing)
-   [To do](#to-do)

## Технологии

-   [SwiperJS](https://swiperjs.com/)
-   [LightGalleryJS](https://www.lightgalleryjs.com/)
-   ...

## Использование

Kак установить и использовать проект, пример кода:

Установите npm-пакет с помощью команды:

```sh
$ npm i your-awesome-plugin-name
```

И добавьте:

```js
import { hi } from 'your-awesome-plugin-name'

hi() // Выведет в консоль "Привет!"
```

## Разработка

### Требования

Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v8+.

### Установка зависимостей

Для установки зависимостей, выполните команду:

```sh
$ npm i
```

### Запуск Development сервера

Чтобы запустить сервер для разработки, выполните команду:

```sh
npm run dev
```

### Создание билда

Чтобы выполнить production сборку, выполните команду:

```sh
npm run build
```

~~## Тестирование~~

~~Наш проект покрыт юнит-тестами Jest. Для их запуска выполните команду:~~

```sh
~~npm run test~~
```

## Deploy github

Развернуть приложение на github pages.

```sh
npm run deployGH
```

## Deploy FTP

Развернуть приложение на github pages.

```sh
npm run deploy
```

## Contributing

Как помочь в разработке проекта? Как отправить предложение или баг-репорт. Как отправить доработку (оформить pull request, какие стайлгайды используются). Можно вынести в отдельный файл — [Contributing.md](./CONTRIBUTING.md).

## FAQ

Если потребители вашего кода часто задают одни и те же вопросы, добавьте ответы на них в этом разделе.

### Зачем вы разработали этот проект?

Заказ

## To do

-   [x] Добавить крутое README
-   [ ] Всё переписать
-   [ ] ...

## Команда проекта

Оставьте пользователям контакты и инструкции, как связаться с командой разработки.

-   [Luss Artem](https://t.me/vosmerok) — Front-End Engineer

## Источники

Если вы чем-то вдохновлялись, расскажите об этом: где брали идеи, какие туториалы смотрели, ссылки на исходники кода.