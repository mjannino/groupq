build-all:
	docker-compose up

server-shell:
	docker-compose exec server sh

client-shell:
	docker-compose exec client sh