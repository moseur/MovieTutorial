using Serenity.Navigation;
using MyPages = MovieTutorial.MovieDB.Pages;

[assembly: NavigationMenu(2000, "Movie", icon: "fa-film")]
[assembly: NavigationLink(2100, "Movie/Movies",typeof(MyPages.MovieController), icon: "fa-video-camera")]
[assembly: NavigationLink(2200, "Movie/Genres",typeof(MyPages.GenreController), icon: "fa-thumb-tack")]
[assembly: NavigationLink(2300, "Movie/Person",typeof(MyPages.PersonController), icon: "fa-users")]