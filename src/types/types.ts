export interface Film{
    "id": string, // Unique result id
    "tconst": string,
    "titleType": string,
    "primaryTitle": string,
    "originalTitle": string,
    "isAdult": boolean,
    "startYear": number,
    "endYear": number,
    "runtimeMinutes": number,
    "genres": [],
    "averageRating": number,
    "numVotes": number,
}