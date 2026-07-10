#!/usr/bin/env bash
# Runs SQL seed scripts inside the active SQL Server container
echo "Running SQL seed script..."
docker compose exec -T db /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P P@ssw0rd!123 -C < database/seed/01-seed.sql

echo "SQL seeding complete."
