# See the README for installation instructions.

NODE_PATH ?= ./node_modules
HANDLEBARS_COMPILER = $(NODE_PATH)/handlebars/bin/handlebars
LOCALE ?= en_US

all: \
	handlebars 

handlebars: Makefile
	rm -f templates/server-templates.js
	$(HANDLEBARS_COMPILER) templates/*.handlebars > templates/server-templates.js

run: all
	mongod &
	supervisor server.js
