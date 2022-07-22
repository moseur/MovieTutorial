namespace MovieTutorial.Web.Modules.MovieDB.Person {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.registerEnumType(Gender, 'MovieTutorial.Web.Modules.MovieDB.Person.Gender', 'MovieDB.Gender');
}
