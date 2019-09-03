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
  - Webpack(Build, devServer)
  - Nginx
- Backend
  - Ruby on Rails 6.0
  - Unicorn
  - RSpec
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

## ライセンス

- MIT
