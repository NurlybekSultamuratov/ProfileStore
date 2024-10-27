import { createServer, ServerResponse } from 'node:http';
import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import { error } from 'node:console';
const hostname:string = '127.0.0.1';
const port:number = 3000;




const server= createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
