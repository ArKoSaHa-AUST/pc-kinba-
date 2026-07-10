#!/usr/bin/env bash
# Reset SQL Server database container and drop its persistent volume
echo "Stopping database service and dropping its storage volume..."
docker compose down -v db

echo "Starting fresh database container..."
docker compose up -d db

echo "Waiting for database to boot up and initialize..."
docker compose exec -T db /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P P@ssw0rd!123 -Q "SELECT 1" -C -t 30 2>/dev/null
until [ $? -eq 0 ]; do
    echo "Still booting..."
    sleep 3
    docker compose exec -T db /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P P@ssw0rd!123 -Q "SELECT 1" -C -t 10 2>/dev/null
done

echo "Database reset complete."
