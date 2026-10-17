const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function getSafeFilePath(reqUrl) {
  let reqPath = decodeURI(reqUrl.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  // Remove leading slashes so path.resolve joins relative to baseDir
  const cleanPath = reqPath.replace(/^\/+/, '');

  // Search candidate root directories (handles both local dev and serverless runtime environments)
  const candidateDirs = [
    path.resolve(__dirname),
    path.resolve(process.cwd())
  ];

  for (const baseDir of candidateDirs) {
    const fullPath = path.resolve(baseDir, cleanPath);
    if ((fullPath === baseDir || fullPath.startsWith(baseDir + path.sep)) && fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
}

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const filePath = getSafeFilePath(req.url);

  if (!filePath) {
    const reqPath = decodeURI(req.url.split('?')[0]);
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + reqPath);
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const reqPath = decodeURI(req.url.split('?')[0]);
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found: ' + reqPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

if (require.main === module || !process.env.VERCEL) {
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

module.exports = server;
