#!/bin/sh

npm run lerna-version
version="v$(node -p 'require("./lerna.json").version')"
latest_release="$(git describe --abbrev=0)"

if [ $latest_release = $version ]
then
	echo "No new version. Exit."
else
	branch="release/$version"
	git checkout -b $branch
	git add .
	git commit -m "chore(release): $version"
	git tag $version
	git push origin $branch
fi
