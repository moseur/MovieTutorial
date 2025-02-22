﻿using MovieTutorial.MovieDB;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieTutorial.Web.Modules.MovieDB.Person
{
    [ColumnsScript("MovieDB.PersonMovie")]
    [BasedOnRow(typeof(MovieCastRow))]
    public class PersonMovieColumns
    {
        [Width(220)]
        public String MovieTitle { get; set; }
        [Width(100)]
        public Int32 MovieYear { get; set; }
        [Width(200)]
        public String Character { get; set; }
    }
}
