using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.MovieDB.PersonRow>;
using MyRow = MovieTutorial.MovieDB.PersonRow;

namespace MovieTutorial.MovieDB
{
    public interface IPersonListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PersonListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPersonListHandler
    {
        public PersonListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}