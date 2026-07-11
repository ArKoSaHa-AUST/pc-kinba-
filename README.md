# PCBuilder Bangladesh - Production-Ready Dockerized E-Commerce & AI Platform

PCBuilder Bangladesh is a full-stack, enterprise-grade web application similar to **PCPartPicker**, built specifically for the Bangladesh PC hardware market. It features live multi-seller price comparisons, an AI-powered PC build recommendation generator, real-time compatibility auditing, and custom build sharing.

---

## 1. Project Architecture

This application is designed using **Clean Architecture** and **SOLID** principles.

```
                  +-----------------------------------+
                  |      React SPA (Vite / TS)        |
                  +-----------------------------------+
                                    |
                                    v (HTTP / REST APIs)
                  +-----------------------------------+
                  |      PCBuilder.API (Web API)      |
                  +-----------------------------------+
                    |             |                 |
                    v             v                 v
            +---------------+ +---------------+ +---------------+
            |  Persistence  | |   Identity    | | Infrastructure|
            |   (EF Core)   | |  (JWT/Auth)   | | (AI/Scrapers) |
            +---------------+ +---------------+ +---------------+
                    \             |                 /
                     \            v                /
                      +---------------------------+
                      |      PCBuilder.Domain     |
                      |   (Core Entities/Rules)   |
                      +---------------------------+
```

---

## 2. Directory Layout

The workspace is organized into logical folders separating UI, server layers, docker configurations, database scripts, and management tools:

```
PCBuilder/
├── .github/                 # GitHub CI Actions workflows & templates
├── .vscode/                 # VS Code launch and settings configurations
├── assets/                  # Logos and static documentation assets
├── client/                  # React + TypeScript Vite application
├── database/                # Database schema base, init, and seed SQL scripts
│   ├── init/                # Auto-executed SQL initialization scripts
│   └── seed/                # Static seeding SQL data
├── docker/                  # Containership manifests (Dockerfiles)
│   ├── api/                 # C# Web API Dockerfile
│   ├── client/              # React SPA Dockerfile + Prod Nginx serve config
│   ├── nginx/               # Reverse proxy config & routing rules
│   └── ai/                  # AI Python service Dockerfile placeholder
├── docs/                    # Architectural Decision Records (ADRs)
├── scripts/                 # Cross-platform startup and housekeeping scripts
├── .editorconfig            # Code style styling rules
├── .gitattributes           # Git checkout LF line-ending normalization config
├── .gitignore               # Detailed VCS ignore index
├── build.sh                 # Local .NET compiler bypass shell wrapper
├── client-build.sh          # Local client compiler Docker wrapper
├── client-dev.sh            # Local client dev server Docker wrapper
├── docker-compose.yml       # Production-like container configuration
├── docker-compose.override.yml # Local development volumes & live reload configurations
├── PCBuilder.sln            # Visual Studio Solution File
└── README.md                # This document
```

---

## 3. Requirements

To run the application, ensure the following are installed:
*   **Docker & Docker Compose** (minimum Docker Compose v2.0+)
*   **Node.js (v20+)** (optional, for running local non-containerized UI dev server)
*   **.NET 9.0 SDK** (optional, for running local non-containerized backend debugs)

---

## 4. Getting Started

### 4.1 Simple Bootstrap (Recommended)

1.  Clone this repository.
2.  Copy `.env.example` into a local `.env` configuration file:
    ```bash
    cp .env.example .env
    ```
3.  Start the entire development environment:
    ```bash
    docker compose up --build
    ```
4.  Once started, access the services:
    *   **Frontend Client**: [http://localhost](http://localhost)
    *   **Swagger API Docs**: [http://localhost/swagger](http://localhost/swagger)
    *   **Database (SQL Server)**: `localhost:1433` (User: `sa`, Password: matches `.env`)
    *   **Redis Cache**: `localhost:6379`
    *   **AI Service**: [http://localhost:8000](http://localhost:8000)

---

## 5. Development Infrastructure & Workflow

### 5.1 Host Directory Special-Character Bypass (Linux/macOS)
Due to special characters (`??`) in the host directory path on this machine, standard `dotnet` and `vite` CLI commands can fail because their bundlers/compilers URL-encode paths and fail file system resolutions.

We provide custom wrapper files that bypass these limitations:
*   **C# Compile/Run/Test**: Run commands through the **`./build.sh`** file.
    *   *Example*: `./build.sh build` (compiles backend with overridden intermediate output paths).
*   **React SPA Build**: Run **`./client-build.sh`** to compile the client inside a Debian container.
*   **React Dev Server**: Run **`./client-dev.sh`** to launch Vite inside a container with HMR (Hot Module Replacement) mapped to `http://localhost:5173`.

### 5.2 Helper scripts (`scripts/`)
We include helper scripts under `scripts/` (Bash for Linux/macOS and PowerShell for Windows):
*   **Start Stack**: `./scripts/start.sh` or `.\scripts\start.ps1`
*   **Stop Stack**: `./scripts/stop.sh` or `.\scripts\stop.ps1`
*   **Rebuild**: `./scripts/rebuild.sh` or `.\scripts\rebuild.ps1`
*   **Database Seed**: `./scripts/db-seed.sh` or `.\scripts\db-seed.ps1`
*   **Database Reset**: `./scripts/db-reset.sh` or `.\scripts\db-reset.ps1`
*   **Tail Logs**: `./scripts/logs.sh` or `.\scripts\logs.ps1`

---

## 6. Running Tests

To run C# unit and integration tests:
```bash
./build.sh test
```

---

## 7. Production Deployment Guidelines

When moving your application to a production environment, ensure the following practices are implemented:

Environment Configuration: Set the ASPNETCORE_ENVIRONMENT variable explicitly to Production.

Database Security: Update the default SQL Server password (MSSQL_SA_PASSWORD) to a strong, cryptographically secure string. Never commit this password to version control systems (VCS).

Secrets Management: Keep sensitive credentials—such as your GEMINI_API_KEY and JWT_SECRET—protected by storing them in a dedicated production manager like HashiCorp Vault, Azure Key Vault, or Kubernetes Secrets.

Reverse Proxy Configuration: Configure Nginx to bind to port 443 using valid SSL/TLS certificates, and mandate an automatic redirect from HTTP to HTTPS.

Multi-Stage Serving Deployment: Use a multi-stage process where the client application is built within a Node.js container and its assets are then transferred to Nginx. Optimize the Nginx service to efficiently serve compressed static bundles (Gzip and Brotli).
