const BASE_TALL_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'
const BASE_WIDE_URL = 'https://image.tmdb.org/t/p/w710_and_h400_face/'

export default function GetPosterImage(poster_path, tall = true) {
  const BASE_IMAGE_URL = (tall ? BASE_TALL_URL : BASE_WIDE_URL)
  const image_url = new URL(BASE_IMAGE_URL + poster_path)
  return image_url
}