Write-Host "Start Project in Development Mode With Docker ..."
docker container rm client-app --force
docker-compose -f .\docker-compose.dev.yml down
docker-compose -f .\docker-compose.dev.yml up -d --build
Write-Host "Press any keys to quit ..."
Read-Host