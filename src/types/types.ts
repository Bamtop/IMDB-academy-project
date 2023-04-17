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
    "genres": string[],
    "averageRating": number,
    "numVotes": number,
    imageUrl:string
}
export interface Data{
    "facets": [],
    "hits": Film[],
}

export interface RootState{
    currentQuery: string,
    isOpenFilter: boolean,
    selectQuestion:number,
    selectOption1: string,
    selectOption2: string,
    selectOption3: string,
    startYearFilter: number,
    ratingFilm: number,
    duration: number,
    genre:  string,
    genres: string[],
    films2: any[],
    films3: Film[],
    quizResult: Film[],
    trendingResult: Data[],
    recentResult: Data[],
}