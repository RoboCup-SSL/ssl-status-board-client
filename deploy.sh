#!/usr/bin/env bash

set -e

echo "Build"
node_modules/.bin/ng build --base-href=/status-board/ --env=tigers

echo "Copy"
rsync -r dist/* root@tigers-mannheim.de:/srv/www/status-board/

echo "chown"
ssh root@tigers-mannheim.de chown -R www-data: /srv/www/status-board
