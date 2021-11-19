#!/bin/bash
sed "s/tagVersion/$1/g" deployment-pingpong-app.yaml > pingpong-app.yaml
