import GetAPIRequestURL from "./GetAPIRequestURL"

export default function FetchMovieList(request, setter) {
  let requestURL = GetAPIRequestURL(request)
  fetch(requestURL)
    .then(res => res.json())
    .then(data => setter(data))
}