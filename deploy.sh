#!/usr/bin/env bash

set -e

target_env=$1

case "${target_env}" in
  "tigers")
  server=root@tigers-mannheim.de
  remote_dir=/srv/www/status-board/
  base_href=/status-board/
  ;;
  "ssl")
  server=ssl@ssllive.robocup.org
  remote_dir=/var/www/html/ssl/
  base_href=/
  ;;
  *)
  echo "Please specify the target environment" >&2
  exit 1
  ;;
esac


echo "Build"
node_modules/.bin/ng build --base-href=${base_href} --env=${target_env}

echo "Copy"
rsync -r dist/* ${server}:${remote_dir}

if [ "${target_env}" == "tigers" ]; then
  echo "chown"
  ssh ${server} chown -R www-data: ${remote_dir}
fi
