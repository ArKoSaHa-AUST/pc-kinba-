# PCBuilder API Dockerfile
# Multi-stage build for production-ready ASP.NET Core Web API 9.0

# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy project files and restore dependencies
COPY ["server/src/PCBuilder.Domain/PCBuilder.Domain.csproj", "server/src/PCBuilder.Domain/"]
COPY ["server/src/PCBuilder.Shared/PCBuilder.Shared.csproj", "server/src/PCBuilder.Shared/"]
COPY ["server/src/PCBuilder.Application/PCBuilder.Application.csproj", "server/src/PCBuilder.Application/"]
COPY ["server/src/PCBuilder.Persistence/PCBuilder.Persistence.csproj", "server/src/PCBuilder.Persistence/"]
COPY ["server/src/PCBuilder.Identity/PCBuilder.Identity.csproj", "server/src/PCBuilder.Identity/"]
COPY ["server/src/PCBuilder.Infrastructure/PCBuilder.Infrastructure.csproj", "server/src/PCBuilder.Infrastructure/"]
COPY ["server/src/PCBuilder.API/PCBuilder.API.csproj", "server/src/PCBuilder.API/"]
COPY ["server/Directory.Build.props", "server/"]

# Restore via C# Solution structure
RUN dotnet restore "server/src/PCBuilder.API/PCBuilder.API.csproj"

# Copy entire source and publish application in Release mode
COPY . .
WORKDIR "/src/server/src/PCBuilder.API"
RUN dotnet publish "PCBuilder.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Environment setups
ENV ASPNETCORE_ENVIRONMENT=Development
ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080
ENTRYPOINT ["dotnet", "PCBuilder.API.dll"]
