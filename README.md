# ohapo

## Setup

```
$ cp frontend/.env.default frontend/.env && cp .env.default .env && cp api/src/.env.default api/src/.env
$ docker-compose build
$ docker-compose run --rm api bundle install
$ docker-compose up
```

- API -> http://localhost:3031
- Frontend -> http://localhost:3032
- Database -> http://localhost:3033
- Swagger -> http://localhost:3039

## API

### Test

```
全テストを実行
$ docker-compose run --rm api rspec

指定したテストを実行
$ docker-compose run --rm api rspec -e [describe]
```

### Lint

以下のコマンドで静的解析を実行します。

```
$ docker-compose run --rm api rubocop
```

## Frontend

### Lint

以下のコマンドで静的解析を実行します。

```
$ docker-compose exec builder yarn lint
```

## Deployment

## TroubleShoot

各エラーメッセージが出た時の対処

### Run `bundle install` to install missing gems.

```
$ docker volume ls
$ docker volume rm ohapo_bundle
```

## System Architecture

![Architecture](https://i.imgur.com/U5jX0XJ.png)

## Directory Structure

```
.
├── LICENSE
├── README.md
├── api                                             // APIディレクトリ
│   └── src
│       ├── Gemfile
│       ├── Gemfile.lock
│       ├── app
│       │   ├── channels
│       │   ├── controllers                        // ビジネスロジック
│       │   ├── jobs                               // バックグラウンドジョブ
│       │   ├── models                             // モデル定義
│       │   └── views
│       ├── config
│       │   ├── application.rb
│       │   ├── boot.rb
│       │   ├── database.yml
│       │   ├── environment.rb
│       │   ├── environments
│       │   ├── initializers
│       │   ├── routes.rb                           // ルーティング
│       │   └── storage.yml
│       ├── db
│       │   ├── migrate                             // マイグレーション定義
│       │   ├── schema.rb
│       │   └── seeds.rb
│       ├── log
│       │   ├── development.log
│       │   └── test.log
│       ├── public
│       │   └── robots.txt
│       ├── spec
│       │   ├── models
│       │   ├── rails_helper.rb
│       │   ├── requests
│       │   └── spec_helper.rb
│       ├── storage
│       ├── tmp
│       │   ├── cache
│       │   ├── development_secret.txt
│       │   ├── pids
│       │   ├── restart.txt
│       │   └── sockets
│       └── vendor
├── docker-compose.yml
├── docs
│   ├── api
│   │   └── swagger.yaml
│   └── desgin
│       └── system_architecture.md
├── etc
│   └── docker
│       ├── api
│       │   ├── Dockerfile
│       │   └── entrypoint.sh
│       ├── db
│       │   ├── Dockerfile
│       │   └── init
│       ├── frontend
│       │   └── Dockerfile
│       └── nginx
│           ├── conf.d
│           └── nginx.conf
└── frontend
    ├── dist
    │   ├── index.html
    │   └── main.bundle.js
    ├── package.json
    ├── src
    │   ├── App
    │   │   ├── Footer
    │   │   ├── Header
    │   │   ├── Home
    │   │   ├── Login
    │   │   └── User
    │   ├── actions
    │   │   ├── changeAccountAnchorEl.js
    │   │   ├── changeHeaderButtonToClose.js
    │   │   ├── fetchHealthCheck.js
    │   │   ├── fetchNews.js
    │   │   └── fetchWeatherForecast.js
    │   ├── api
    │   │   ├── getHealthCheck.js
    │   │   ├── getNews.js
    │   │   ├── getWeatherForecast.js
    │   │   └── http.js
    │   ├── configureStore.js
    │   ├── consts
    │   │   ├── consts.js
    │   │   └── theme.js
    │   ├── index.jsx
    │   ├── public
    │   │   ├── assets
    │   │   └── index.html
    │   ├── reducers
    │   │   ├── header.js
    │   │   ├── healthCheck.js
    │   │   ├── index.js
    │   │   ├── news.js
    │   │   └── weatherForecast.js
    │   ├── routes.js
    │   └── sagas
    │       ├── healthCheck.js
    │       ├── index.js
    │       ├── news.js
    │       └── weatherForecast.js
    ├── webpack.common.js
    ├── webpack.dev.js
    ├── webpack.prod.js
    └── yarn.lock
```

## License

MIT
