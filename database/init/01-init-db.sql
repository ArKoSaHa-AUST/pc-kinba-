-- PCBuilder Database Creation Script
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = N'PCBuilderDb')
BEGIN
    CREATE DATABASE [PCBuilderDb];
    PRINT 'Database PCBuilderDb created successfully.';
END
ELSE
BEGIN
    PRINT 'Database PCBuilderDb already exists.';
END
GO
