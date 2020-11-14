let env = process
console.log('env: ', env)

if (env !== 'dev') {
  env = ''
}

const host = {
  'env': {
    host: '/dev-api'
  },
  '': {
    host: '/prod-api'
  }
}
export default host[env]
