#!/bin/bash

. ~/.nvm/nvm.sh;

pm2 stop all;

rm -rf /var/app/current;
