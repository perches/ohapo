# Railsコンテナ用Dockerfile

# イメジのベースラインにRuby2.5.1を指定
FROM ruby:2.5
# Railsに必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y nodejs
# ルートディレクトリを作成
RUN mkdir /app
# 作業ディレクトリを指定
WORKDIR /app

# ローカルのGemfileとGemfile.lockをコピー
COPY ./api/src/Gemfile /app/Gemfile
COPY ./api/src/Gemfile.lock /app/Gemfile.lock
# Gemのインストール実行
RUN bundle install

# ローカルのsrcをコピー
COPY ./api/src /app

# Add a script to be executed every time the container starts.
COPY ./etc/docker/api/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3031

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
