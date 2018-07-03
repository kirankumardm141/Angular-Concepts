USE [MobileDb]
GO

INSERT INTO [dbo].[Mobile]
           ([description]
           ,[image]
           ,[model]
           ,[msId]
           ,[name]
           ,[price]
           ,[rating]
           ,[releaseDate]
           ,[available])
     VALUES
           (<description, nvarchar(max),>
           ,<image, nvarchar(max),>
           ,<model, nvarchar(max),>
           ,<msId, int,>
           ,<name, nvarchar(max),>
           ,<price, int,>
           ,<rating, nvarchar(max),>
           ,<releaseDate, nvarchar(max),>
           ,<available, int,>)
GO


