var http = new XMLHttpRequest()

var url = 'http://google.com'

var method = 'GET'

http.open(method, url)
http.onreadystatechange = () => {
  if (http.readyState === XMLHttpRequest.DONE) {
    
  }
}
