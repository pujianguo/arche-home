install:
	rm -rf node_modules
	rm -rf yarn.lock
	yarn install

local-release:
	rm -rf dist
	yarn build:release

release:
	git checkout release
	git merge master
	git push origin release
	git checkout master
