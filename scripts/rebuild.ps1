# PowerShell rebuild utility
Write-Host "Running Clean Script..." -ForegroundColor Green
& .\scripts\clean.ps1

Write-Host "Building C# backend solution..." -ForegroundColor Green
dotnet build PCBuilder.sln

Write-Host "Installing client dependencies..." -ForegroundColor Green
Set-Location -Path .\client
npm install
Set-Location -Path ..

Write-Host "Building React client..." -ForegroundColor Green
docker run --rm -v "${pwd}:/workspace" -w /workspace/client node:20-slim npm run build

Write-Host "Rebuild complete successfully." -ForegroundColor Green
