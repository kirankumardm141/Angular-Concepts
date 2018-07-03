USE [MobileDb]
GO

/****** Object:  Table [dbo].[Mobile]    Script Date: 02-06-2018 18:04:10 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Mobile](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](max) NULL,
	[image] [nvarchar](max) NULL,
	[model] [nvarchar](max) NULL,
	[msId] [int] NOT NULL,
	[name] [nvarchar](max) NULL,
	[price] [int] NOT NULL,
	[rating] [nvarchar](max) NULL,
	[releaseDate] [nvarchar](max) NULL,
	[available] [int] NULL,
 CONSTRAINT [PK_Mobile] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

