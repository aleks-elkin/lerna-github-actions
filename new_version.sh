#!/bin/sh

npm run lerna-version -- --no-push
version=$(node -p 'require("./lerna.json").version')

branch="release/$version"

git checkout -b $branch

git add . && git commit -m "chore(release): $version"
git push origin $branch