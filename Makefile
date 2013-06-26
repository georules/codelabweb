NODE_PATH ?= ./node_modules
HANDLEBARS_COMPILER = $(NODE_PATH)/handlebars/bin/handlebars

all: \
	handlebars 

handlebars: Makefile
	rm -f templates/server-templates.js
	$(HANDLEBARS_COMPILER) templates/*.handlebars > templates/server-templates.js

run: all
	mongod &
	supervisor server.js
