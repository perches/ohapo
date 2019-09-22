#!/bin/bash
set -e
# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# dbヘルスチェック
# echo `date '+%Y/%m/%d %H:%M:%S'` $0 "[INFO] Connection confriming..."
# while :
# do
#   result=`/usr/bin/mysqladmin ping -h db -uroot -p${MYSQL_ROOT_PASSWORD}`
#   if echo $result|grep 'alive'; then
#     break
#   fi
#   sleep 3;
# done

bundle exec rails db:setup RAILS_ENV=production
# bundle exec rails db:migrate 2>/dev/null || bundle exec rails db:setup

exec "$@"