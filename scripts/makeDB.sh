#!/usr/bin/env bash
source ../.env

psql -h ${DB_HOST} -p ${DB_PORT} -U postgres -c "CREATE USER ${DB_USER} WITH PASSWORD '${DB_PASSWORD}'" \
-c "CREATE DATABASE ${DB_NAME};" \
-c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};";