﻿namespace MovieTutorial.MovieDB {
    export interface MovieGenresRow {
        MovieGenreId?: number;
        MovieId?: number;
        GenreId?: number;
        MovieTitle?: string;
        MovieDescription?: string;
        MovieStoryline?: string;
        MovieYear?: number;
        MovieReleaseDate?: string;
        MovieRuntime?: number;
        MovieKind?: number;
        GenreName?: string;
    }

    export namespace MovieGenresRow {
        export const idProperty = 'MovieGenreId';
        export const localTextPrefix = 'MovieDB.MovieGenres';
        export const deletePermission = 'MovieDB:MovieGenres:Delete';
        export const insertPermission = 'MovieDB:MovieGenres:Insert';
        export const readPermission = 'MovieDB:MovieGenres:Read';
        export const updatePermission = 'MovieDB:MovieGenres:Update';

        export declare const enum Fields {
            MovieGenreId = "MovieGenreId",
            MovieId = "MovieId",
            GenreId = "GenreId",
            MovieTitle = "MovieTitle",
            MovieDescription = "MovieDescription",
            MovieStoryline = "MovieStoryline",
            MovieYear = "MovieYear",
            MovieReleaseDate = "MovieReleaseDate",
            MovieRuntime = "MovieRuntime",
            MovieKind = "MovieKind",
            GenreName = "GenreName"
        }
    }
}
