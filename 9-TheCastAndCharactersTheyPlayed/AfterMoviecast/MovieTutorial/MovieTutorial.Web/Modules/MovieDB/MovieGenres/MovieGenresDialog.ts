
namespace MovieTutorial.MovieDB {

    @Serenity.Decorators.registerClass()
    export class MovieGenresDialog extends Serenity.EntityDialog<MovieGenresRow, any> {
        protected getFormKey() { return MovieGenresForm.formKey; }
        protected getIdProperty() { return MovieGenresRow.idProperty; }
        protected getLocalTextPrefix() { return MovieGenresRow.localTextPrefix; }
        protected getService() { return MovieGenresService.baseUrl; }
        protected getDeletePermission() { return MovieGenresRow.deletePermission; }
        protected getInsertPermission() { return MovieGenresRow.insertPermission; }
        protected getUpdatePermission() { return MovieGenresRow.updatePermission; }

        protected form = new MovieGenresForm(this.idPrefix);

    }
}