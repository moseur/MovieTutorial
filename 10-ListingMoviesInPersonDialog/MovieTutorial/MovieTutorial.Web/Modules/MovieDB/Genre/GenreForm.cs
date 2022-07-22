using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace MovieTutorial.MovieDB.Forms
{
    [FormScript("MovieDB.Genre")]
    [BasedOnRow(typeof(GenreRow), CheckNames = true)]
    public class GenreForm
    {
        public String Name { get; set; }
    }
}