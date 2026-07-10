-- PCBuilder Database Seed Script
-- Used to seed static structural data (Stores, Categories, Brands)
USE [PCBuilderDb];
GO

-- Helper to check and insert Category
CREATE OR ALTER PROCEDURE #InsertCategory
    @Name NVARCHAR(100),
    @Slug NVARCHAR(100)
AS
BEGIN
    IF EXISTS (SELECT * FROM sys.tables WHERE name = 'Categories')
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM Categories WHERE Slug = @Slug)
        BEGIN
            INSERT INTO Categories (CategoryId, Name, Slug, CreatedUtc)
            VALUES (NEXT VALUE FOR CategorySequence, @Name, @Slug, GETUTCDATE());
        END
    END
END;
GO

-- Helper to check and insert Brand
CREATE OR ALTER PROCEDURE #InsertBrand
    @Name NVARCHAR(100),
    @LogoUrl VARCHAR(500)
AS
BEGIN
    IF EXISTS (SELECT * FROM sys.tables WHERE name = 'Brands')
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM Brands WHERE Name = @Name)
        BEGIN
            INSERT INTO Brands (BrandId, Name, LogoUrl, CreatedUtc)
            VALUES (NEXT VALUE FOR BrandSequence, @Name, @LogoUrl, GETUTCDATE());
        END
    END
END;
GO

-- Helper to check and insert Store
CREATE OR ALTER PROCEDURE #InsertStore
    @Name NVARCHAR(100),
    @BaseUrl VARCHAR(250),
    @LogoUrl VARCHAR(500)
AS
BEGIN
    IF EXISTS (SELECT * FROM sys.tables WHERE name = 'Stores')
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM Stores WHERE Name = @Name)
        BEGIN
            INSERT INTO Stores (StoreId, Name, BaseUrl, LogoUrl, CreatedUtc)
            VALUES (NEXT VALUE FOR StoreSequence, @Name, @BaseUrl, @LogoUrl, GETUTCDATE());
        END
    END
END;
GO

-- Execute Seed scripts safely
-- Categories
EXEC #InsertCategory N'CPU', 'cpu';
EXEC #InsertCategory N'GPU', 'gpu';
EXEC #InsertCategory N'Motherboard', 'motherboard';
EXEC #InsertCategory N'RAM', 'ram';
EXEC #InsertCategory N'Storage', 'storage';
EXEC #InsertCategory N'Power Supply', 'psu';
EXEC #InsertCategory N'Case', 'case';
EXEC #InsertCategory N'Cooler', 'cooler';

-- Brands
EXEC #InsertBrand N'AMD', 'https://assets.pcbuilder.com.bd/brands/amd.png';
EXEC #InsertBrand N'Intel', 'https://assets.pcbuilder.com.bd/brands/intel.png';
EXEC #InsertBrand N'ASUS', 'https://assets.pcbuilder.com.bd/brands/asus.png';
EXEC #InsertBrand N'MSI', 'https://assets.pcbuilder.com.bd/brands/msi.png';
EXEC #InsertBrand N'GIGABYTE', 'https://assets.pcbuilder.com.bd/brands/gigabyte.png';
EXEC #InsertBrand N'Corsair', 'https://assets.pcbuilder.com.bd/brands/corsair.png';

-- Stores
EXEC #InsertStore N'Star Tech', 'https://www.startech.com.bd', 'https://assets.pcbuilder.com.bd/stores/startech.png';
EXEC #InsertStore N'Ryans Computers', 'https://www.ryanscomputers.com', 'https://assets.pcbuilder.com.bd/stores/ryans.png';
EXEC #InsertStore N'TechLand', 'https://www.techlandbd.com', 'https://assets.pcbuilder.com.bd/stores/techland.png';

-- Drop helpers
DROP PROCEDURE #InsertCategory;
DROP PROCEDURE #InsertBrand;
DROP PROCEDURE #InsertStore;
GO

PRINT 'SQL Seeding process completed successfully.';
GO
