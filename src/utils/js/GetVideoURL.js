const baseURLs = { vimeo: 'https://vimeo.com/', youtube: 'https://www.youtube.com/embed/' }

export default function GetVideoURL(provider, key) {
  provider = provider.toLowerCase()

  switch(provider) {
    case('vimeo'):
      return baseURLs.vimeo + key
    case('youtube'):
      return baseURLs.youtube + key
    default:
      console.log('ERROR: Invalid provider:', provider)
      return ''
  }
}