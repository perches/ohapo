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
├── api                                            // APIディレクトリ
│   └── src
│       ├── Gemfile
│       ├── Gemfile.lock
│       ├── app
│       │   ├── channels
│       │   ├── controllers                        // ビジネスロジック
│       │   ├── jobs                               // バックグラウンドジョブ
│       │   ├── models                             // モデル定義
│       │   └── views
│       ├── config                                 // 各設定
│       ├── db
│       │   ├── migrate                             // マイグレーション定義
│       │   ├── schema.rb
│       │   └── seeds.rb
│       ├── log
│       │   ├── development.log                     // ローカル環境のログ
│       │   └── test.log                            // RSpecのログ
│       ├── spec                                    // RSpec
│       ├── storage
│       └── vendor                                  // CircleCIではここにgemをインストールする
├── docker-compose.yml                              // 全コンテナの操作
├── docs                                            // 設計など
│   ├── api
│   │   └── swagger.yaml                            // REST API仕様定義
│   └── desgin                                      // その他設計
├── etc
│   └── docker                                      // コンテナイメージなどのdocker周り仕様
│       ├── api
│       ├── db
│       ├── frontend
│       └── nginx
└── frontend                                        // フロントエンドディレクトリ
    ├── dist                                        // webpackのbundleが入る
    ├── package.json
    ├── src
    │   ├── App                                     // ページごとのComponent
    │   ├── actions                                 // Resux Actions
    │   ├── api                                     // 叩くAPIを定義
    │   │   └── http.js                             // 共通非同期処理
    │   ├── configureStore.js                       // Redux Store
    │   ├── consts                                  // 定数やテーマの定義
    │   ├── index.jsx                               // エントリポイント
    │   ├── public                                  // アセットなど
    │   ├── reducers                                // Redux Reducers
    │   ├── routes.js                               // ルーティングをまとめて定義する
    │   └── sagas                                   // Redux-saga
    ├── webpack.common.js                           // webpack-mergeで環境ごとに設定
    ├── webpack.dev.js
    ├── webpack.prod.js
    └── yarn.lock
```
　
## License

MIT
