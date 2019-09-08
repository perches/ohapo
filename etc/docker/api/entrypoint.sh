#!/bin/bash
set -e
# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

bundle exec rails db:migrate 2>/dev/null || bundle exec rails db:setup

exec "$@"