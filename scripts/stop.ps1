# PowerShell Docker stop script
Write-Host "Stopping all containers..." -ForegroundColor Green
docker compose down

Write-Host "Docker stack stopped." -ForegroundColor Green
