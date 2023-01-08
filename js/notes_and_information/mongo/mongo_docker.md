# MongoDB Docker / Docker-Compose Notes

[Docker Image](https://hub.docker.com/_/mongo/) docs.

See the [docker-compose file](./mongo-stack.yml).

```bash
# Get a terminal inside the container
docker exec -it mongo_test bash
# Use the CLI command to connect to the database service
mongosh -u root -p example