#!/bin/bash

cd /var/app/current/;

mysql -u'intern_4' -h'10.0.2.142' intern_4 < bcc-intern.sql;

. ~/.nvm/nvm.sh;

nvm install 14 --lts;

npm ci;
