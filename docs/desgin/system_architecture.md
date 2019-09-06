# system_architecture

## 設計思想

- インフラ

  - Infrastructure as Code
    - Ansible
  - Serverless Architecture
    - AWS Lambda

- アプリケーション
  - SPA
    - React, Redux
  - Microservice Architecture
    - docker-compose
  - Identity as a Service
    - AWS Cognito

## スタック

- Project Management
  - Github Issues(Issue ベース)
  - Slack
- System Degsin
  - Swagger(API 仕様)
  - Markdown(その他設計)
- Frontend
  - React
    - Redux(状態管理)
    - Styled-Components(CSS in JS)
    - Material-UI(UI コンポーネント)
  - Webpack(Build, devServer)
  - Nginx
  - ESLint(静的解析)
- Backend
  - Ruby on Rails 6.0
  - Unicorn
  - RSpec
  - Rubocop(静的解析)
- CI
  - CircleCI
  - Github
- Infrastructure
  - docker-compose
  - AWS
  - Ansible
- Database
  - MySQL

## AWS アーキテクチャ

![](https://i.imgur.com/d7N6wXH.png)

## コンテナ設計

- api:3031
- frontend:3032
- db:3033
- swagger: 3039

## ブランチ運用

1. develop から feature ブランチを切る
2. feature ブランチから develop にマージする
3. developの変更を検出して、CIでstaging環境にデプロイする
4. リリースのタイミングで master にマージする
5. masterの変更を検出して、CIでproduction環境にデプロイする

- master
- develop(デフォルトブランチ)
  - feature/your_feature_name1
  - feature/your_feature_name2
  - feature/your_feature_name3

## ライセンス

- MIT
