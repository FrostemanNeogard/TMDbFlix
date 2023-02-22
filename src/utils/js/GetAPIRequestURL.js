const API_KEY = process.env.REACT_APP_API_KEY
const BASE_API_URL = 'https://api.themoviedb.org/3/'

export default function GetAPIRequestURL(request, additionalParams = {}) {
  // Create the request URL by concatenating the base URL with the request. Then set the api_key param.
  const returnURL = new URL(BASE_API_URL + request)
  returnURL.searchParams.set('api_key', API_KEY)

  // Add additional params if requested
  for (let property in additionalParams) returnURL.searchParams.set(property, additionalParams[property])

  return returnURL
}