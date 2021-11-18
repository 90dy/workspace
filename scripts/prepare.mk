.PHONY: prepare
prepare:
	husky install
	git config --local include.path ../.gitconfig
