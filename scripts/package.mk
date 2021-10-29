.PHONY: create
create: path := $(shell read -p "path (.e.g: packages/my-package): " path && echo $$path)
create:
	echo $(path)
	$(if $(path),,$(error "please provide a path"))
	mkdir -p $(dir $(path))
	git subtree add --prefix="$(path)" template/ecmascript-package template/ecmascript-package/master --squash
	cd $(path)
	pnpm init
