#!/bin/bash

cd ./packages/theme
yarn build:dev

cd ../box
yarn build:dev

cd ../ui-component-a
yarn build:dev

cd ../ui-component-b
yarn build:dev

cd ../app-a
yarn build:dev

cd ../app-b
yarn build:dev

cd ../root-app
yarn build:prod

read