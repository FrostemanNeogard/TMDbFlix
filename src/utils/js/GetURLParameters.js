// Returns parameters for URLs which can otherwise be difficult when using React router dom's HashRouter component
function GetURLParameters() {
  const URL = window.location.href
  const urlParams = URL.substring(URL.indexOf('?'), URL.length)
  const params = new URLSearchParams(urlParams)
  return params
}

export default GetURLParameters