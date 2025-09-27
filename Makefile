.PHONY: help serve build check deploy

help:
	@echo "Available targets:"
	@echo "  make help    - Show this help message"
	@echo "  make serve   - Run zola serve with live reload"
	@echo "  make build   - Build the static site"
	@echo "  make check   - Run zola check for link verification"
	@echo "  make deploy  - Build and push the site via GitHub Actions"

serve:
	zola serve

build:
	zola build

check:
	zola check

deploy: build
	git push origin master
