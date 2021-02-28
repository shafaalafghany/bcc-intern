#!/bin/bash

cd /var/app/current/;

if [[ -f ".env" ]];then
  echo "File env exist. Replacing with a new one";
  rm .env;
else
  echo "File env does not exist. Creating env file";
fi;

echo "DB_HOST=10.0.2.142" > .env;
echo "DB_USER=intern_4" >> .env;
echo "DB_PASS=" >> .env;
echo "DB_NAME=intern_4" >> .env;
echo "APP_KEY=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w ${1:-64} | head -n 1)" >> .env;
