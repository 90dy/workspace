all: \
	infra \
	www \
	apps/djo.bi \
	apps/modl

infra:
	git clone git@github.com:acidteam/infra

www:
	git clone git@github.com:acidteam/www.acid.tech

apps/djo.bi:
	git clone git@github.com:acidteam/djobi

apps/modl:
	git clone git@github.com:acidteam/modl
