
let BACKEND_DOMAIN = 'http://localhost:3010'
if (process.env.NODE_ENV === 'production') {
  BACKEND_DOMAIN = 'http://h5.limesoftware.cn'
} else if (process.env.NODE_ENV === 'development') {
  BACKEND_DOMAIN = 'http://localhost:3010'
}
export default {
  BACKEND_DOMAIN
}
