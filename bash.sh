#!/bin/sh

npm run build

docker build -t webpack-demo .