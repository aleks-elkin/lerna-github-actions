#!/bin/sh

latest_release="$(git describe --abbrev=0)"

npm run lerna-version
version="v$(node -p 'require("./lerna.json").version')"

if [ $latest_release = $version ]
then
	echo "No new version. Exit."
else
	branch="release/$version"
	git checkout -b $branch
	git add .
	git commit -m "chore(release): $version"
	git push --set-upstream origin $branch
	git push origin --tags
fi
