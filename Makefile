install:
	rm -rf node_modules
	rm -rf yarn.lock
	yarn install

release:
	rm -rf dist
	yarn build:release
