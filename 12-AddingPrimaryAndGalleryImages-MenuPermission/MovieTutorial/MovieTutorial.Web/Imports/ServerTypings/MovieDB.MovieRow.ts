namespace MovieTutorial.MovieDB {
    export interface MovieRow {
        CastList?: MovieCastRow[];
        MovieId?: number;
        Title?: string;
        Description?: string;
        Storyline?: string;
        Year?: number;
        ReleaseDate?: string;
        Runtime?: number;
        Kind?: Web.Migrations.DefaultDB.MovieKind;
        GenreList?: number[];
        PrimaryImage?: string;
        GalleryImages?: string;
    }

    export namespace MovieRow {
        export const idProperty = 'MovieId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'MovieDB.Movie';
        export const lookupKey = 'MovieDB.Movie';

        export function getLookup(): Q.Lookup<MovieRow> {
            return Q.getLookup<MovieRow>('MovieDB.Movie');
        }
        export const deletePermission = 'MovieDB:Movie:Delete';
        export const insertPermission = 'MovieDB:Movie:Insert';
        export const readPermission = 'MovieDB:Movie:Read';
        export const updatePermission = 'MovieDB:Movie:Update';

        export declare const enum Fields {
            CastList = "CastList",
            MovieId = "MovieId",
            Title = "Title",
            Description = "Description",
            Storyline = "Storyline",
            Year = "Year",
            ReleaseDate = "ReleaseDate",
            Runtime = "Runtime",
            Kind = "Kind",
            GenreList = "GenreList",
            PrimaryImage = "PrimaryImage",
            GalleryImages = "GalleryImages"
        }
    }
}
