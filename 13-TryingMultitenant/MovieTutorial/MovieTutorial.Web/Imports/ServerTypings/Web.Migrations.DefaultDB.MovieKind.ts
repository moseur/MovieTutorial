namespace MovieTutorial.Web.Migrations.DefaultDB {
    export enum MovieKind {
        Film = 1,
        TvSeries = 2,
        MiniSeries = 3
    }
    Serenity.Decorators.registerEnumType(MovieKind, 'MovieTutorial.Web.Migrations.DefaultDB.MovieKind', 'MovieDB.MovieKind');
}
