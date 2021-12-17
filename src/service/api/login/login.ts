import http from '@/service/http'
import * as T from './types'

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}
export default loginApi

// 作者：前端开发爱好者
// 链接：https://zhuanlan.zhihu.com/p/441467856
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
