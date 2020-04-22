#!/bin/sh

rm -rf ./docs
mkdir ./docs
cp -r ./apps/dashboard/dist ./docs/dashboard
cp -r ./apps/home/build ./docs/home
cp -r ./apps/login/build ./docs/login
cp -r ./apps/main/dist ./docs/main
cp -r ./apps/nav/build ./docs/nav

echo 'All apps build success.'
