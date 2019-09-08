# Railsコンテナ用Dockerfile

# イメージのベースラインにRuby2.6.4を指定
FROM ruby:2.6.4-alpine
# Railsに必要なパッケージをインストール
RUN apk update && \
    apk add --update nodejs nodejs-npm && \
    apk add --no-cache bash tzdata libxml2-dev curl-dev make gcc libc-dev g++ mariadb-dev
# ルートディレクトリを作成
RUN mkdir /app
# 作業ディレクトリを指定
WORKDIR /app

# ローカルのGemfileとGemfile.lockをコピー
COPY ./api/src/Gemfile /app/Gemfile
COPY ./api/src/Gemfile.lock /app/Gemfile.lock
# Gemのインストール実行
RUN bundle install && \
    rm -rf /usr/local/bundle/cache/* /usr/local/share/.cache/* /var/cache/* /tmp/* && \
    apk del libxml2-dev curl-dev make gcc libc-dev g++

# ローカルのsrcをコピー
COPY ./api/src /app

# Add a script to be executed every time the container starts.
COPY ./etc/docker/api/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]