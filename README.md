# ohapo

## Directory structure

TODO: 環境構築が全部できたら書く

## Setup

```
$ cp frontend/.env.default frontend/.env
$ cp api/src/.env.default api/src/.env 
$ docker-compose build
$ docker-compose up
```

### 環境変数

DB 接続に関するパスワード等を自由に設定して、下記のディレクトリに配置します

```/.env
MYSQL_ROOT_PASSWORD=password
```

```/api/src/.env
MYSQL_ROOT_PASSWORD=password
```

- frontend -> http://localhost:3032
- Swagger -> http://localhost:3039

## frontend

### Lint

以下のコマンドで静的解析を実行します。

```
$ docker-compose exec builder yarn lint
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
