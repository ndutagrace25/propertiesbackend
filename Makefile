SHELL:=/bin/bash                  

#Use these commands when deploying to Google Cloud Run
build:
	@docker build --no-cache --target prod -t side-hustle-backend:prod .

# run:
# @docker run -p 5000:5000 --env-file=.env -it side-hustle-backend:prod 

tag:
	@docker tag side-hustle-backend:prod gcr.io/powwater/side-hustle-backend

push:
	@docker push gcr.io/powwater/side-hustle-backend
	
## Use these commands when working locally in you machine
# up:
# 	@chmod +x start_dev.sh
# 	@. ./start_dev.sh

down:
	@docker-compose down

clean:
	@docker volume prune
