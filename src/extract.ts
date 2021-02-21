type NETFLIXMOVIES = 'Matrix' | 'Harry Potter' | 'Avengers' | 'Justice League' | 'WW2';
type PRIMEMOVIES = 'Matrix'| 'WW2';
type MOVIES_I_LIKE = 'Matrix' | 'Justice League'|'Harry Potter';

let MY_NETFLIX_MOVIES: Extract<NETFLIXMOVIES, MOVIES_I_LIKE>
let MY_PRIME_MOVIES: Extract<PRIMEMOVIES, MOVIES_I_LIKE>


MY_NETFLIX_MOVIES='Harry Potter'
MY_PRIME_MOVIES='Matrix'


export { }