-include mk/dotmk.mk

mk:
	-git remote add mk https://github.com/dotmk/dotmk 2>/dev/null
	git subtree add --squash -P mk mk master

js/public/% js/private/%:
	git clone git@github.com:acidteam/$* $@

 js/vendor/%:
	git clone git@github.com:$* $@

.PHONY: all
all: setup

.PHONY: setup
setup: mk
