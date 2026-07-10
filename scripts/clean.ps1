# PowerShell clean utility for Windows
Write-Host "Cleaning C# backend intermediate folders (bin/obj)..." -ForegroundColor Green
Get-ChildItem -Path . -Filter "bin" -Recurse -Directory | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue
Get-ChildItem -Path . -Filter "obj" -Recurse -Directory | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue

Write-Host "Cleaning React client node_modules and builds..." -ForegroundColor Green
Remove-Item -Path .\client\node_modules -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path .\client\dist -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path .\client\coverage -Force -Recurse -ErrorAction SilentlyContinue

Write-Host "Cleaning complete." -ForegroundColor Green
