using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = MovieTutorial.MovieDB.MovieGenresRow;

namespace MovieTutorial.MovieDB
{
    public interface IMovieGenresDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieGenresDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMovieGenresDeleteHandler
    {
        public MovieGenresDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}