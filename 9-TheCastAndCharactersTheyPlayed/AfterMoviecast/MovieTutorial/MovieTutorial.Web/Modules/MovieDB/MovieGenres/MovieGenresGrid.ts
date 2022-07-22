
namespace MovieTutorial.MovieDB {

    @Serenity.Decorators.registerClass()
    export class MovieGenresGrid extends Serenity.EntityGrid<MovieGenresRow, any> {
        protected getColumnsKey() { return MovieGenresColumns.columnsKey; }
        protected getDialogType() { return MovieGenresDialog; }
        protected getIdProperty() { return MovieGenresRow.idProperty; }
        protected getInsertPermission() { return MovieGenresRow.insertPermission; }
        protected getLocalTextPrefix() { return MovieGenresRow.localTextPrefix; }
        protected getService() { return MovieGenresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}