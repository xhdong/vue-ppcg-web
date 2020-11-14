import Server from '@/utils/request'
import host from '@/config/url'
export default {
  // 通用接口请求
  commonRequest(payload) {
    const request = {
      url: payload.url ? payload.url : host.host + payload.api,
      silence: payload.silence || false
    }
    if (payload.method === 'get') {
      request.params = payload.data || {}
    } else {
      request.data = payload.data || {}
    }
    return Server(request)
  },
  getOtherQuery(query) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {})
  }
}
