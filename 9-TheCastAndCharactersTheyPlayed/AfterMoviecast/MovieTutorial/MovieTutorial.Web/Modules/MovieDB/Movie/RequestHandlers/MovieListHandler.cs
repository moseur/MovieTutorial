using Serenity;
using Serenity.Data;
using Serenity.Services;
using MyRequest = MovieTutorial.MovieDB.MovieListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.MovieDB.MovieRow>;
using MyRow = MovieTutorial.MovieDB.MovieRow;

namespace MovieTutorial.MovieDB
{
    public interface IMovieListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class MovieListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMovieListHandler
    {
        private static MyRow.RowFields fld => MyRow.Fields;

        public MovieListHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void ApplyFilters(SqlQuery query)
        {
            base.ApplyFilters(query);

            if (!Request.Genres.IsEmptyOrNull())
            {
                var mg = MovieGenresRow.Fields.As("mg");

                query.Where(Criteria.Exists(
                    query.SubQuery()
                        .From(mg)
                        .Select("1")
                        .Where(
                            mg.MovieId == fld.MovieId &&
                            mg.GenreId.In(Request.Genres))
                        .ToString()));
            }
        }
    }
}