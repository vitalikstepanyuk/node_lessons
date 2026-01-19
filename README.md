<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

Home Tasks for Node.js course.

## Опис думок з приводу роботи

### NestJS?

**NestJS** — це фреймворк, який привносить як на мене легкий вхід у Node.js розробку. Він використовує модульну архітектуру, схожу на Angular, що робить код організованим та легким для масштабування.

Ключові переваги:
- **Декоратори** — чистий, декларативний синтаксис (`@Controller`, `@Get`, `@Post`)
- **Dependency Injection** — автоматичне управління залежностями
- **Модульність** — кожна фіча інкапсульована у своєму модулі
- **TypeScript з коробки** — типізація та автодоповнення
- **Вбудована валідація** — `class-validator` + `ValidationPipe` = надійний захист API

### Nest CLI — магія генерації

CLI значно пришвидшує розробку. Одна команда створює повний CRUD:

```bash
nest g resource users
```

І ти отримуєш: контролер, сервіс, модуль, DTO, entity — все з правильною структурою та зв'язками. Не потрібно писати boilerplate вручну!

### Враження від домашньої роботи

Робота з NestJS залишила позитивні враження. Особливо сподобалась робота з `ValidationPipe` — достатньо описати DTO з декораторами, і фреймворк сам валідує вхідні дані та повертає зрозумілі помилки.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Vitalii Stepaniuk](https://www.linkedin.com/in/vitalik-stepanyuk-a9768599/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
