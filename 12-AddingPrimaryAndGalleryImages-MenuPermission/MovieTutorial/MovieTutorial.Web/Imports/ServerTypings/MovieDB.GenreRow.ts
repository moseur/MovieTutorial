namespace MovieTutorial.MovieDB {
    export interface GenreRow {
        GenreId?: number;
        Name?: string;
    }

    export namespace GenreRow {
        export const idProperty = 'GenreId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'MovieDB.Genre';
        export const lookupKey = 'MovieDB.Genre';

        export function getLookup(): Q.Lookup<GenreRow> {
            return Q.getLookup<GenreRow>('MovieDB.Genre');
        }
        export const deletePermission = 'MovieDB:Genre:Delete';
        export const insertPermission = 'MovieDB:Genre:Insert';
        export const readPermission = 'MovieDB:Genre:Read';
        export const updatePermission = 'MovieDB:Genre:Update';

        export declare const enum Fields {
            GenreId = "GenreId",
            Name = "Name"
        }
    }
}
