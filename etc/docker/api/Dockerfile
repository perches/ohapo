FROM ruby:2.6.4-alpine

RUN apk update && \
    apk add --update nodejs nodejs-npm && \
    apk add --no-cache bash tzdata libxml2-dev curl-dev make gcc libc-dev g++ mariadb-dev mysql-client

RUN mkdir /app
WORKDIR /app

COPY ./api/src/Gemfile ./Gemfile
COPY ./api/src/Gemfile.lock ./Gemfile.lock

RUN gem install bundler --no-document && \
    bundle install && \
    rm -rf /usr/local/bundle/cache/* /usr/local/share/.cache/* /var/cache/* /tmp/*
# apk del libxml2-dev curl-dev make gcc libc-dev g++

COPY ./api/src /app
COPY ./etc/docker/api/entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
