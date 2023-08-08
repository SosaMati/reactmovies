const API='http://api.themoviedb.org/3'; 

export function get(path) {
  return fetch(API + path,{
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTQ3OWM2MTM1ZDgwMWI2YTk2ZjA4OWRkYzdjMmU0YiIsInN1YiI6IjY0MjRjMDkwOTYwY2RlMDBlMGJiNjJmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.88A6aJHhFLqnDLNLMIYWOWXfaQQIJrQAYJXv47epfqU`,

        'Content-Type': 'application/json;charset=utf-8'

    }
  }).then((res) => res.json());
} 

