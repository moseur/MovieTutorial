using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace MovieTutorial.MovieDB.Pages
{

    [PageAuthorize(typeof(MovieGenresRow))]
    public class MovieGenresController : Controller
    {
        [Route("MovieDB/MovieGenres")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/MovieGenres/MovieGenresIndex.cshtml");
        }
    }
}