const http = require('http')
const port = 3000

http
  .createServer((req, res) => {
    console.log(req)
    const { url, method } = req

    if (url === '/login' && method === 'POST') {
      let data = ''
      req.on('data', (chunk) => {
        data += chunk
      })

      req.on('end', () => {
        // 解码，可能会有中文
        data = decodeURI(data)
        console.log(data)

        const dataObj = JSON.parse(data)
        console.log(dataObj)

        res.writeHead(200, {
          'Content-Type': 'application/json',
        })
        res.end(
          JSON.stringify({
            code: 0,
            message: '成功',
            data: dataObj,
          })
        )
      })
    } else {
      res.end('Hello World')
    }
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })
