﻿# Dev.to social webapp
![image](https://user-images.githubusercontent.com/94024020/197677794-6efea999-8944-4084-a9fd-0cadf44ab3ac.png)

If you want to check out my Front-end codebase, click [here](https://github.com/NguyenAnhVuong/Image-Lazer-Frontend)

### Build With

- [![Typescript][typescriptlang.org]][typescript-url]
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- [![NestJS][nestjs.com]][nestjs-url]
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
- [![Git][gitscm.com]][git-url]
- [![Github][github.com]][github-url]

### Installation

1. Clone the repo (BOTH client and server)

```sh
    git clone https://github.com/dat-nguyen-2001/Dev.to-Client.git
    git clone https://github.com/dat-nguyen-2001/Dev.to-Backend.git
```

2. Install NPM packages

```sh
    npm install
```

3. Enter your own Environment variables

```sh
    DB_URL = ""
    DB_PASSWORD = ""
    DB_HOST = ""
    DB_DATABASE = ""
    JWT_SECRET = ""
    JWT_REFRESHTOKEN = ""
```

4. Run

```sh
    npm run start:dev  -- at the server side
    npm run start  -- at the client side
```

## The Project

As this is a social networking site, registration is needed for users to experience all of Image Lazer's features:

- Create your own articles about programmer's topics.
- Like other articles.
- Save people's posts to your reading list for later read.
- Search for articles in your interests.
- Look into the details of an article.
- Commenting on different articles.
- And of course you can also change your personal information (avatar, interests, etc...)

...

### Project Architecture

- LIKE MODULE : Deals with the liking mechanisms.
- COMMENT MODULE : Provides commenting feature.
- ARTICLE MODULE : Handles user interactions with articles.
- READINGLIST MODULE : Provides the function to save other people's articles.
- USER MODULE: Provides login, logout, create articles, save articles, comment, like feature for users.

=>All modules will be included in APP MODULE to ensure the encapsulation of the application.

### Future development

As the web is developed by only one developer (me),due to the limited time, knowledge and resources, it could not serve full features of a social webapp like Facebook, twitter, etc. In the future, by updating new technologies as well as when there's demand, I'll add some more features to the app:

1. Allow users to follow other users
2. Allow users to chat with the others.
3. Allow users to get notifications about the articles/users they're following.
and more.
