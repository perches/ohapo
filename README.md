# shubun

## Directory structure

## Setup

```
$ docker-compose build # swaggerのみの間は不要
$ docker-compose up
```

- Swagger -> http://localhost:3039

## Test

### API

```
全テストを実行
$ doker-compose run --rm api rspec

指定したテストを実行
$ $ doker-compose run --rm api rspec -e [describe]
```

## Deployment

## License

MIT
