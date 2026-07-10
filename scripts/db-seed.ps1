# PowerShell database seeding utility
Write-Host "Running SQL seed script..." -ForegroundColor Green
Get-Content .\database\seed\01-seed.sql | docker compose exec -T db /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P P@ssw0rd!123 -C

Write-Host "SQL seeding complete." -ForegroundColor Green
