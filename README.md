# ohapo

## Directory structure

TODO: 環境構築が全部できたら書く

## Setup

```
$ cp frontend/.env.default frontend/.env
$ docker-compose build
$ docker-compose up
```

- frontend -> http://localhost:3032
- Swagger -> http://localhost:3039

## frontend

### Lint

以下のコマンドで静的解析を実行します。

```
$ docker-compose exec builder yarn lint
```

## api

### Lint

以下のコマンドで静的解析を実行します。
```
$ docker-compose run api rubocop
自動で修正
$ docker-compose run api rubocop --auto-correct 

```

## Test

### API

```
全テストを実行
$ docker-compose run --rm api rspec

指定したテストを実行
$ docker-compose run --rm api rspec -e [describe]
```

## Deployment

## License

MIT
