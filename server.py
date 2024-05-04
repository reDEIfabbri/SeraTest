import http.server
import socketserver
from http.server import SimpleHTTPRequestHandler
from typing import Type

PORT = 8000

Handler: Type[SimpleHTTPRequestHandler] = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
