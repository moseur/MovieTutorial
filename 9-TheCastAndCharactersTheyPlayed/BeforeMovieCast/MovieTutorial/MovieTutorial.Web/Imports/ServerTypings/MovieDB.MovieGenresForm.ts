namespace MovieTutorial.MovieDB {
    export interface MovieGenresForm {
        MovieId: Serenity.IntegerEditor;
        GenreId: Serenity.IntegerEditor;
    }

    export class MovieGenresForm extends Serenity.PrefixedContext {
        static formKey = 'MovieDB.MovieGenres';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MovieGenresForm.init)  {
                MovieGenresForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(MovieGenresForm, [
                    'MovieId', w0,
                    'GenreId', w0
                ]);
            }
        }
    }
}
