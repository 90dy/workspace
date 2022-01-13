all: \
	www \
	apps/djo.bi \
	apps/modl

www:
	git clone git@github.com:acidteam/www.acid.tech

apps/djo.bi:
	git clone git@github.com:acidteam/djobi

apps/modl:
	git clone git@github.com:acidteam/modl
