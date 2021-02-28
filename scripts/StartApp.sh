#!/bin/bash

cd /var/app/current/

node index.js &

disown %1
