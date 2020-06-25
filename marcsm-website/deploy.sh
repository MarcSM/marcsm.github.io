#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git init

# add index and favicon
git add index.html
git add favicon.ico

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'marcsm.cat' > CNAME

cd -

# git init
# git add -A
# git add .
git add dist/*
git commit -m 'Deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:marcsm/marcsm.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -