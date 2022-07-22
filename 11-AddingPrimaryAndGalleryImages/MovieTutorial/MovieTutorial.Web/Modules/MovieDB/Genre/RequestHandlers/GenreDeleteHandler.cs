using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = MovieTutorial.MovieDB.GenreRow;

namespace MovieTutorial.MovieDB
{
    public interface IGenreDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class GenreDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGenreDeleteHandler
    {
        public GenreDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}