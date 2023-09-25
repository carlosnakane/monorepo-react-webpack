#!/bin/bash


cd ./packages/app-a
yarn build

cd ../app-b
yarn build

cd ../root-app
yarn build:prod

read