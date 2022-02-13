#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy gy spending app to netlify' &&
git remote add origin git@github.com:Yueran-Yu/spending-app-pro.git &&
git push -u origin master -f &&
cd -
