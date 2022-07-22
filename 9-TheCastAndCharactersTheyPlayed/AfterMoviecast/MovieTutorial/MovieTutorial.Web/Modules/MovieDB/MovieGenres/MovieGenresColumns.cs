using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MovieTutorial.MovieDB.Columns
{
    [ColumnsScript("MovieDB.MovieGenres")]
    [BasedOnRow(typeof(MovieGenresRow), CheckNames = true)]
    public class MovieGenresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MovieGenreId { get; set; }
        public String MovieTitle { get; set; }
        public String GenreName { get; set; }
    }
}