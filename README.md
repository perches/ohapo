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

## TroubleShoot

各エラーメッセージが出た時の対処

### Run `bundle install` to install missing gems.

```
$ docker volume ls 
$ docker volume rm ohapo_bundle 
```

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

## System Architecture

![Architecture](https://i.imgur.com/U5jX0XJ.png)

## Directory Structure

TODO: 環境構築が全部できたら書く

## License

MIT
