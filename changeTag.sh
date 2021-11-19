#!/bin/bash
sed "s/tagVersion/$1/g" simple-php-app-raw.yaml > simple-php-app.yaml
