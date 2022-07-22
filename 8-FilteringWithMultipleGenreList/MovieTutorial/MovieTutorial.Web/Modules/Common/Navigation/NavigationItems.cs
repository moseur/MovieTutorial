using Serenity.Navigation;
using static MVC.Views;
using MovieDB = MovieTutorial.MovieDB.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]

[assembly: NavigationMenu(2000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(2100, "Movie Database/Movies",
    typeof(MovieDB.MovieController), icon: "fa-video-camera")]
[assembly: NavigationLink(2200, "Movie Database/Genres",
    typeof(MovieDB.GenreController), icon: "fa-thumb-tack")]