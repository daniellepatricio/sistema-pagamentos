const { createReadStream, existsSync, readFileSync, statSync } = require('fs');
const { createServer } = require('http');
const path = require('path');

const latestPath = path.join('allure-report', 'latest.json');

if (!existsSync(latestPath)) {
  console.error('Nenhum relatorio Allure encontrado. Rode yarn report antes.');
  process.exit(1);
}

const { reportDir } = JSON.parse(readFileSync(latestPath, 'utf8'));
const rootDir = path.resolve(reportDir);
const port = Number(process.env.PORT || 5123);

const contentTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.map': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const server = createServer((req, res) => {
  const requestedPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const relativePath = requestedPath === '/' ? 'index.html' : requestedPath.slice(1);
  const filePath = path.resolve(rootDir, relativePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const finalPath = existsSync(filePath) && statSync(filePath).isFile()
    ? filePath
    : path.join(rootDir, 'index.html');

  res.writeHead(200, {
    'Content-Type': contentTypes[path.extname(finalPath)] || 'application/octet-stream'
  });
  createReadStream(finalPath).pipe(res);
});

server.listen(port, () => {
  console.log(`Relatorio Allure disponivel em http://localhost:${port}`);
  console.log(`Servindo pasta: ${rootDir}`);
});
