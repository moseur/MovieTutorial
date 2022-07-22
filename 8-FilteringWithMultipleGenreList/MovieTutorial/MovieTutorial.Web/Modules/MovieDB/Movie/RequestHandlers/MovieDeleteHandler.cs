using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = MovieTutorial.MovieDB.MovieRow;

namespace MovieTutorial.MovieDB
{
    public interface IMovieDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MovieDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMovieDeleteHandler
    {
        public MovieDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}