import flyd from 'flyd'
import url from 'url'
import R from 'ramda'

module.exports = () => {
  let stream = flyd.stream()
  let target = Date.now()
  let dur = 100
  let href = location.href
  const poll = () => {
    if(stream.end()) return
    let now = date.now()
    target += dur
    if(href !== location.href) {
      stream(url.parse(location.href))
      href = location.href
    }
    setTimeout(poll, target - now)
  }
  return stream
}

