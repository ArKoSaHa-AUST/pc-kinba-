# PowerShell database reset script for Windows
Write-Host "Stopping database service and dropping its storage volume..." -ForegroundColor Green
docker compose down -v db

Write-Host "Starting fresh database container..." -ForegroundColor Green
docker compose up -d db

Write-Host "Waiting for database to boot up and initialize..." -ForegroundColor Green
Start-Sleep -Seconds 15

Write-Host "Database reset complete." -ForegroundColor Green
