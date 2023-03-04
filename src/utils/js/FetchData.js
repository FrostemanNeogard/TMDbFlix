export default function FetchMovieList(requestURL, setter) {
  fetch(requestURL)
    .then(res => res.json())
    .then(data => setter(data))
}