# PowerShell Docker startup script
Write-Host "Starting all Docker containers..." -ForegroundColor Green
docker compose up --build -d

Write-Host "All services started." -ForegroundColor Green
Write-Host "Go to http://localhost to access the application proxy." -ForegroundColor Cyan
