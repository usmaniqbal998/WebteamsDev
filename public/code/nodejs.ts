import http from 'http'
import fs from 'fs'
import path from 'path'
import url from 'url'

// Define interfaces for handling requests and responses
interface CustomRequest extends http.IncomingMessage {
  parsedUrl?: url.UrlWithParsedQuery
}

interface CustomResponse extends http.ServerResponse {}

// Helper function to serve file contents
const serveFileContents = (
  filePath: string,
  contentType: string,
  response: CustomResponse
) => {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        response.writeHead(404)
        response.end('File not found')
      } else {
        response.writeHead(500)
        response.end('Sorry, there was an internal server error.')
      }
    } else {
      response.writeHead(200, { 'Content-Type': contentType })
      response.end(content, 'utf-8')
    }
  })
}

// Create HTTP server
const server = http.createServer((req: CustomRequest, res: CustomResponse) => {
  req.parsedUrl = url.parse(req.url!, true)

  const pathname = req.parsedUrl.pathname

  // Serve index.html for the root path
  if (pathname === '/') {
    serveFileContents(
      path.join(__dirname, 'public', 'index.html'),
      'text/html',
      res
    )
  } else if (pathname === '/api/data') {
    // Example API response
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
      JSON.stringify({
        message: 'Hello from the Node.js server!',
        timestamp: Date.now()
      })
    )
  } else {
    // Serving static files (images, CSS, JavaScript, etc.)
    const extname = String(path.extname(pathname)).toLowerCase()
    const mimeTypes: { [key: string]: string } = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml'
    }

    const contentType = mimeTypes[extname] || 'application/octet-stream'
    serveFileContents(
      path.join(__dirname, 'public', pathname),
      contentType,
      res
    )
  }
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
