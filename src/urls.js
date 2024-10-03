const apikey = import.meta.env.VITE_API_KEY;

export const orginals = `/discover/tv?api_key=${apikey}&with_networks=213`;

export const trending = `/trending/all/week?api_key=${apikey}&language=en-US`;
export const action = `/discover/movie?api_key=${apikey}&with_genres=28`;

export const comedy = `/discover/movie?api_key=${apikey}&with_genres=35`;

export const horror = `/discover/movie?api_key=${apikey}&with_genres=27`;

export const romance = `/discover/movie?api_key=${apikey}&with_genres=10749`;
