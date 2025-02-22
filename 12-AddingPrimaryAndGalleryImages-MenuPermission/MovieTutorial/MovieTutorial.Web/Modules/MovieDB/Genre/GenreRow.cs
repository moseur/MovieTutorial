﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace MovieTutorial.MovieDB
{
    [ConnectionKey("Default"), Module("MovieDB"), TableName("[mov].[Genre]")]
    [DisplayName("Genre"), InstanceName("Genre")]
    [ReadPermission("MovieDB:Genre:Read")]
    [InsertPermission("MovieDB:Genre:Insert")]
    [UpdatePermission("MovieDB:Genre:Update")]
    [DeletePermission("MovieDB:Genre:Delete")]
    [LookupScript("MovieDB.Genre", Permission = "?")]
    public sealed class GenreRow : Row<GenreRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Genre Id"), Identity, IdProperty]
        public Int32? GenreId
        {
            get => fields.GenreId[this];
            set => fields.GenreId[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        public GenreRow()
            : base()
        {
        }

        public GenreRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GenreId;
            public StringField Name;
        }
    }
}
