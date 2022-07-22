namespace MovieTutorial.MovieDB {
    export interface MovieCastForm {
        MovieId: Serenity.IntegerEditor;
        PersonId: Serenity.IntegerEditor;
        Character: Serenity.StringEditor;
    }

    export class MovieCastForm extends Serenity.PrefixedContext {
        static formKey = 'MovieDB.MovieCast';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MovieCastForm.init)  {
                MovieCastForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(MovieCastForm, [
                    'MovieId', w0,
                    'PersonId', w0,
                    'Character', w1
                ]);
            }
        }
    }
}
