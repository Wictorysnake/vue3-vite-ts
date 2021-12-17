const http = require('http')
const port = 3000

http
  .createServer((req, res) => {
    console.log(req)
    const { url } = req

    if (url === '/login') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({
          code: 0,
          message: '成功',
          data: {
            userName: 'zhangsan',
            passWord: '123456',
          },
        })
      )
    } else {
      res.end('Hello World')
    }
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })
